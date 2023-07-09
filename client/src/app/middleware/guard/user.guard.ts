import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of, switchMap, take, tap } from 'rxjs';
import { useAuthFn } from 'src/app/view/auth/config/use.auth';

export const userGuard: CanActivateFn = (route, state) => {

    const router                = inject(Router);
    const useAuth               = useAuthFn();
    const toastr                = useAuth.toastr;
    const collectionAuthService = useAuth.serviceCollection;
    const entitiesAuthService   = useAuth.serviceEntity;
    const tokenService          = useAuth.serviceToken;
    let isToken                 = tokenService.checkToken();

    const routerError = () => router.navigate(['/not-found']);
    const toasterError = () =>
        toastr.error('Please register or log-in!', 'Sorrry we can\'t give you access!');

    if (!isToken) {

        toasterError();
        routerError();
        return false;
    }

    return collectionAuthService.entities$
        .pipe(

            take(1),

            switchMap((user: any) => {

                if (user.length === 0) {

                    return entitiesAuthService.validate();
                }

                return of(user);

            }),

            catchError((err: any) => {
                
                toasterError();
                routerError();
                return of([])
            }),

            tap((res: any) => {
                  
                let isUser = !!res[0]?._id;

                if (!isUser) {

                    toasterError();
                    routerError();
                }

                return isUser;
            })
        )
}