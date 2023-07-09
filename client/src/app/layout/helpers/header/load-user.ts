import { catchError, exhaustMap, of } from "rxjs";

export function loadUserFn(this: any) {

    this.authEntityService.entities$
        .pipe(
            exhaustMap((res: any) => {

                if (res.length === 0) {
                    return this.authEntityService.validate();
                }
                
                return res;
            }),
            catchError((err: any) => {

                console.log('[Heade Load user] - ', err);
                
                return of([])
            })
        )
        .subscribe();
}