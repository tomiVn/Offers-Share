import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { catchError, map, of, switchMap, take, tap } from "rxjs";
import { useAuthFn } from "src/app/view/auth/config/use.auth";

export const roleGuard: CanActivateFn = (route, state) => {

    const router                = inject(Router);
    const useAuth               = useAuthFn();
    const toastr                = useAuth.toastr;
    const collectionAuthService = useAuth.serviceCollection;
    const entitiesAuthService   = useAuth.serviceEntity;
    const roles                 = ['admin', 'staff', 'partner'];
    
    const routerError = () => router.navigate(['/not-found']);
    const toasterError = () =>
        toastr.error('Role restrictions!', 'Sorrry we can\'t give you access!');

    return collectionAuthService.entities$
        .pipe(

            take(1),

            switchMap((user: any) => {

                if (user.length === 0) {
                    return entitiesAuthService.validate()
                        .pipe(map((getUser: any) => [getUser]))
                }

                return of(user)
            }),

            catchError((err: any) => {

                routerError();
                toasterError();
                return of([])
            }),

            tap((res: any) => {

                let isAvailableRole = roles.some((x) => x === res[0]?.role);
                return isAvailableRole;
            }));
}