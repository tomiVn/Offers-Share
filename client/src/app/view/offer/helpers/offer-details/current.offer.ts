import { catchError, map, of, switchMap, take, takeWhile, tap, throwError } from "rxjs";
import { response } from "src/app/utils/methods/response";

export function currentOfferFn(this: any) {

    this.route.paramMap

        .pipe(

            takeWhile(() => this.isAlive)
        )
        .subscribe((params: any) => {

            const offerId = params.get('id');

            this.collectionOfferService.entities$

                .pipe(

                    take(1),

                    switchMap((offers: any) => {

                        let findOffer = offers.find((offer: any) => offer._id === offerId);

                        if (offers.length === 0 || !findOffer?._id) {

                            return this.offerEntityService.getAll()
                                .pipe(map((offers: any[]) =>
                                    offers.find((offer: any) => offer._id === offerId)))
                        }

                        return of(findOffer);
                    }),

                    tap((res: any) => {

                        if (res?._id) {

                            this.currentOffer = res;
                            return
                        } 
                       
                        throw new Error('We can\'t find offer with id:' + offerId);
                    }),

                    catchError((err: any) => {
                        
                        response.error(this.toastr, err, 'Request error', '');

                        this.router.navigate(['/not-found']);

                        return of([])
                    })
                )
                .subscribe();
        });
}