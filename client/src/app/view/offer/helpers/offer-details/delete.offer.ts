import { catchError, of, switchMap } from "rxjs";
import { response } from "src/app/utils/methods/response";

export function deleteOfferFn(this: any, offer: any) {

    const isConfirmed = confirm("Please confirm that you want to delete this offer!");

    if(!isConfirmed){

        return
    }

    const creatorId = offer?.creator?._id;

    const creatorOffers = offer?.creator?.created_offers;

    this.offerEntityService.delete(offer)
        .pipe(
            switchMap(() => {

                response.success(this.toastr, 'Successfully deleted offer.', `Offer ID: ${offer._id}`);

                this.router.navigate(['/offer']);

                const created_offers = creatorOffers.filter((x: any) => x !== offer._id);

                return this.userEntityService.update({ _id: creatorId, created_offers })
            }),
            catchError((err: any) => {

                response.error(this.toastr, err, 'Error Removing Offer from list!', 'Request is not successfull!')

                return of([]);
            }),
        )
        .subscribe();
}

//distinctUntilChanged()


