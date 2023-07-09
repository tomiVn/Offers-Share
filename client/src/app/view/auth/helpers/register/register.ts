import { catchError, of, take, takeWhile, tap } from "rxjs";
import { IRegister } from "../../interfaces/register.interface";
import { mapErrors } from "src/app/utils/constants/map.errors";
import { response } from "src/app/utils/methods/response";

export function registerFn(this: any, form: any) {

    if (!this.form.valid) {
        return;
    }

    let isToken = this.authTokenService.checkToken();

    if (isToken) {
       
        this.toastr.warning('Please Log-out first!');
        return;
    }

    this.authRegisterService.add(form)

        .pipe(
            
            take(1),

            tap((res: any) => {

                this.authTokenService.setCookieToken(res.token);
                
                response.success(this.toastr, `Hello ${res.name}.`, 'You have successfully logged in.');
                
                this.router.navigate(['/offer']);

            }),
            catchError((err: any) => {

                response.error(this.toastr, err, 'Request is not successful!', 'Register Error')

                this.form.reset();

                return of([])
            })
        )
        .subscribe();
}