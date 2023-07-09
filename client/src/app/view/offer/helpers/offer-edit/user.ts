import { catchError, exhaustMap, map, of, take, tap } from "rxjs";

export function getCurrentUserIdFn(collectionAuthService: any) {
    
    return collectionAuthService.entities$
        .pipe(
            tap((user: any) => {

                console.log('[User]', user);
                
                return  user[0]?._id
            } ),

            catchError((err: any) => {

                console.log('[GET User ID Error]', err);
                
                return of([]);
            })
        )
        .subscribe();
}