import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

export function actionFormFn(this: any, FormDataAppend: any) {

    if (!this.form.valid) {
        return;
    }
    console.log(this.form.value);

    const collectionOfferService = this.useOffer.serviceCollection;

    collectionOfferService
        .add(FormDataAppend(this.form.value))
        .pipe(
            switchMap((res: any) => {

                console.log('[Offer Create Offer Page] - success', res);

                this.form.reset();
                this.router.navigate(['/offer', res._id]);
                this.toastr.success(res.title, '[Successfully created offer]');

                const created_offers = [...(res?.creator?.created_offers || []), res?._id];

                return this.userEntityService.update({ _id: res?.creator?._id, created_offers })
            }),
            catchError((err: any) => {
                let errorFromServer = err.error.error.payload.data;

                if (errorFromServer.length > 0) {

                    errorFromServer.forEach((e: any) =>
                        this.toastr.error(e, 'Offer Error!'));
                }else{

                    this.toastr.error(err.error.message.statusText, 'Offer creation Error!');
                }

                return of([]);
            })
        )
        .subscribe();
}

