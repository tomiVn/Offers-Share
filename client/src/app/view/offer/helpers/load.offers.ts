import { catchError, exhaustMap, of, takeWhile, tap } from "rxjs";

export function loadOffersFn(this: any) {

    this.offerEntityService.entities$
        .pipe(

            takeWhile(() => this.isAlive),

            exhaustMap((res: any) => {

                if (res.length === 0) {

                    return this.offerEntityService.getAll()
                }
                return res;
            }),

            catchError((err: any) => {

                console.log('[User Error] - Error fetching data!', err);

                this.toastr.error('We cant load data!', '[Load Offers Error]');

                return of([])
            })
        )
        .subscribe();
}