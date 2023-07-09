import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { catchError, map, of, switchMap, take, tap } from "rxjs";
import { useAuthFn } from "src/app/view/auth/config/use.auth";

export const profileOwnerGuard: CanActivateFn = (route, state) => {

    const router                = inject(Router);
    const useAuth               = useAuthFn();
    const toastr                = useAuth.toastr;
    const collectionAuthService = useAuth.serviceCollection;
    const entitiesAuthService   = useAuth.serviceEntity;
    let urlID                   = route.paramMap.get('id')?.toString();

    const routerError = () => router.navigate(['/not-found']);
    const toasterError = () =>
        toastr.error('This is not your profile!', 'Sorrry we can\'t give you access!');

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

                routerError();
                toasterError();
                return of([])
            }),
            tap((res: any) => {
                         
                let isOwner = res[0]?._id?.toString() === urlID || res?._id?.toString() === urlID;

                if (!isOwner) {

                    toasterError();
                    routerError();
                }

                return isOwner;
            }));
}