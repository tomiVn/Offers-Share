import { catchError, of, take, tap } from "rxjs";
import { response } from "src/app/utils/methods/response";

export function loginFn(this: any, formdata: any) {

    if (!this.form.valid) {
        return;
    }

    let isToken = this.authTokenService.checkToken();

    if (isToken) {

        response.warning(this.toastr, 'Please Log-out first!', 'Exist User');
        return
    }

    const { email, password } = formdata;

    const queryParams = `?email=${email}&password=${password}`;

    this.authEntityService.authenticate(queryParams)

        .pipe(

            take(1),

            tap((res: any) => {

                this.authTokenService.setCookieToken(res.token);

                response.success(this.toastr, `Hello ${res.name}.`, 'You have successfully logged in.');

                this.form.reset;

                this.router.navigate(['/offer']);
            }),

            catchError((err: any) => {

                response.error(this.toastr, err, 'LogIn Error', 'Request is not successful!');

                this.form.reset()

                return of([])
            })
        )
        .subscribe();
}