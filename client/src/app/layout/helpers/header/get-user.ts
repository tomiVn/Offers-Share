import { catchError, of, tap } from "rxjs";

export function getUserFn(this: any) {

    this.collectionAuthService.entities$
        .pipe(

            tap((res: any) => {

                this.isUser = !!res[0]?._id;
                this.user   = res[0];
            }),

            catchError((err:any) => {

                console.log('[Header Get User Error] - ', err);
                
                return of([])
            })
        )
        .subscribe()
}