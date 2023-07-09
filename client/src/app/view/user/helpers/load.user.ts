import { catchError, exhaustMap, of, switchMap, take, takeWhile, tap } from "rxjs";
import { loadUserOffers } from "./profile/load.offers";

export function loadUser(this: any, loadOffers = false) {

    this.route.params.subscribe((params: any) => {

        this.collectionUserService.entities$

            .pipe(

                take(1),

                takeWhile(() => this.isAlive),

                switchMap((res: any) => {

                    let findUser: any = undefined;

                    if(res){

                        findUser = res.find((u: any) => u?._id === params['id']);
                    }

                    if (res.length === 0 || !findUser) {

                        return this.userEntityService.getByKey(params['id'])
                                   
                            .pipe(
                                tap((getUser: any) => {
                                    
                                    if(getUser){
                                        
                                        return getUser;
                                    }
                                })
                            );
                    }

                    return of(findUser);

                }),

                tap((user: any) => {
                    
                    if (user?._id) {

                        this.user = user;

                        if (loadOffers) {

                            loadUserOffers.call(this);
                        }

                    }
                }),

                catchError((err) => {
                    
                    console.log('Error Load User', err);
                    
                    this.router.navigate(['/not-found']);

                    this.toastr.error('', 'Error - load user');

                    return of([])
                })

            )
            .subscribe()
    })
}