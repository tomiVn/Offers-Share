
import { catchError, of, take, takeWhile, tap } from "rxjs";
import { response } from "src/app/utils/methods/response";

export function addUserToWatchListFn(this: any, offer: any, _id: any) {

    let updated = { ...offer, watchedList: [...offer?.watchedList, { _id }] }

    this.offerEntityService.update(updated)

        .pipe(

            takeWhile(() => this.isAlive),

            take(1),

            tap((res: any) => {

                if (res) {
                    this.currentOffer = res;
                    this.toastr.success('Successfully updated offer.', `[${offer._id}]`);
                }
            }),

            catchError((err: any) => {

                this.toastr.error(err, 'Not successfully updated offer!');

                return of([])
            })
        )
        .subscribe();


    const watched_offers = this.currentUser?.watched_offers
        ? [...this.currentUser?.watched_offers, { _id: offer?._id }] : [{ _id: offer?._id }];

    const updateUser = { ...this.currentUser, watched_offers };

    this.userEntityService.update(updateUser)
        .pipe(

            takeWhile(() => this.isAlive),

            take(1),

            tap((res: any) => {

                if (res) {

                    this.currentUser = res;

                    response.success(this.toastr,'Successfully added offer to your list.', `${offer._id}`)
                }else{

                    response.info(this.toastr,'Afraid that offer is not addded to your list!', `${offer._id}`)
                }
            }),

            catchError((err: any) => {
                
                response.error(this.toastr, err,'Error ading offer in the list!', 
                    'Request is not succssesfull!')
                
                return of([])
            }))
        .subscribe();
}