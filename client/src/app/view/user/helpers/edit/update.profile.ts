import { catchError, of, take, takeWhile, tap } from "rxjs";
import { response } from "src/app/utils/methods/response";

export function updateProfileFn(this: any, userform: any) {

    if (!this.form.valid) {

        return
    }

    let formBorn = new Date(userform.born.value);

    formBorn.setDate(formBorn.getDate() + 1);

    const redactedDate = new Date(formBorn).toISOString().split('T')[0];

    const entity = { ...this.user, ...this.form.value, born: redactedDate };

    this.collectionUserService.update(entity)
        .pipe(
            take(1),

            takeWhile(() => this.isAlive),

            tap((res) => {

                if (res) {

                    response.success(this.toastr, 'You have successfully updated you profile!')

                    this.router.navigate(['/user', this.user._id]);
                }
            }),
            catchError((err: any) => {

                response.error(this.toastr, err, 'Request is not successfull!', 'Please excuse us, we reseive error and your profile is not updated!')

                this.router.navigate(['/not-found']);

                return of([]);
            })
        )
        .subscribe()


}