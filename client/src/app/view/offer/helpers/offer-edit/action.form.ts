import { takeWhile } from "rxjs";

export function actionFormFn(this: any, FormDataAppend: any) {

    console.log('[Edit Page - Action Form Offer Id]', this.currentOffer._id);

    if (this.form.valid) {

        this.offerEntityService.updateOne(this.currentOffer._id, FormDataAppend(this.form.value))
            .pipe(takeWhile(() => this.isAlive))
            .subscribe(
                (res: any) => {

                    console.log('[Edit Page - ActionFormFn File]', res);
                    this.form.reset;
                    this.currentOffer = res;
                    this.cdr.markForCheck();
                    this.router.navigate(['/offer/', res._id]);
                    this.toastr.success(res.title, '[Successfuly updated offer]');
                },
                (err: any) => this.toastr.error(err, '[Error, offer is not updated!]')
            );
    }
}