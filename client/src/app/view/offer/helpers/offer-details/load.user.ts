import { catchError, of, take, takeWhile, tap } from "rxjs";
import { response } from "src/app/utils/methods/response";

export function loadUserFn(this: any) {

    this.collectionAuthService.entities$

        .pipe(

            takeWhile(() => this.isAlive),

            // take(1),

            tap((res: any) => {

                this.isUser = !!res[0]?._id;

                this.currentUser = res[0] || undefined;
            }),

            catchError((err: any) => {
                
                response.error(this.toastr, err, 'Error loading user!', '')

                return of([]);
            })

        )
        .subscribe();
}