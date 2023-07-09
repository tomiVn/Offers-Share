import { catchError, of, take, takeWhile, tap } from "rxjs";
import { response } from "src/app/utils/methods/response";

export function removeUserFromWatchListFn(this: any, offer: any, _id: any) {

    let updated = {
        ...offer,
        watchedList: [...offer.watchedList.filter((id: any) => id !== _id)]
    }

    this.offerEntityService.update(updated)

        .pipe(
            takeWhile(() => this.isAlive),

            take(1),

            tap((res: any) => {

                if(res){

                    this.currentOffer = res;

                    response.success(this.toastr, 'Successfully updated offer.', `${offer._id}`);

                }else{

                    response.warning(this.toastr, 'We are afraid that your request is not succssesfull', 
                        `${offer._id}`);
                }
            }),

            catchError((err: any) => {

                response.error(this.toastr, err, 'Please try again or contact us!',
                    'Opps something happend and your request is not successfull!')

                return of([])
            })
        )

        .subscribe();


    const watched_offers = this.currentUser?.watched_offers
        ? [...this.currentUser?.watched_offers.filter((id: any) => id !== offer?._id)] : [];

    console.log('[Watched Offers]', watched_offers);

    const updateUser = { ...this.currentUser, watched_offers };

    this.userEntityService.update(updateUser)
        .pipe(

            takeWhile(() => this.isAlive),

            take(1),

            tap((res: any) => {

                if(res){

                    this.currentUser = res;

                    this.toastr.success('Successfully removed offer from your list.', `${offer._id}`)
                }
                
            }),
            catchError((err: any) => {

                this.toastr.error('', 'Offer is not removed from your list!');

                return of([])
            }))
        .subscribe();
}