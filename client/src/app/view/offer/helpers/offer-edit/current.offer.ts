import { catchError, concatMap, map, of, switchMap, takeWhile, tap } from "rxjs";

export function currentOfferFn(this: any, checkForOwner: any = false) {

    const routerNavigateNotFound = () => this.router.navigate(['/not-found']);

    this.route.paramMap
        .pipe(takeWhile(() => this.isAlive))

        .subscribe((params: any) => {

            let offerId = params.get('id');

            this.collectionOfferService.entities$
                .pipe(
                    map((offers: any[]) => offers.find((offer: any) => offer._id === offerId)),

                    switchMap((findOffer: any) => {

                        if (!findOffer) {

                            return this.offerEntityService.getByKey(offerId)
                                .pipe(
                                    map((getOffer: any) => getOffer),

                                    catchError((err: any) => {

                                        console.log('[GET offer Error]', err);
                                        this.toastr.error('We can\' find this offer', '[Request Error]');
                                        routerNavigateNotFound();

                                        return of([]);
                                    })
                                )
                        }
                        return of(findOffer);

                    }),
                    tap((res: any) => {

                        if (checkForOwner) {

                            this.collectionAuthService.entities$
                                .pipe(
                                    concatMap((users: any) => {

                                        if (users.length === 0) {

                                            return this.entitiesAuthService.validate()
                                                .pipe(
                                                    map((getUser: any) => [getUser]),

                                                    catchError((err: any) => {

                                                        routerNavigateNotFound();
                                                        return of([])
                                                    })
                                                );
                                        } else {
                                            return of(users);
                                        }

                                    }),

                                    tap((user: any) => {

                                        const userId = user[0]?._id;
                                        const creatorId = res?.creator?._id;

                                        if (userId !== creatorId) {

                                            this.toastr.error('', '[Owner Error]');
                                            routerNavigateNotFound();
                                            return;

                                        } else {
                                            this.currentOffer = res;
                                            this.uploadImage = res.image;

                                            this.cdr.markForCheck()
                                        }

                                    }),
                                    catchError((err: any) =>{

                                        routerNavigateNotFound();
                                        return of([])
                                    })
                                )
                                .subscribe();
                        } else {
                            this.currentOffer = res;
                            this.uploadImage = res.image;

                            this.cdr.markForCheck()
                        }

                    }),
                    catchError((err: any) => {

                        console.log('[Offer Details] - ', err);
                        this.toastr.error('', '[Request Error]');
                        routerNavigateNotFound();
                        return of([]);
                    })
                )
                .subscribe();
        });
}
