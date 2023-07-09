
export function validate(authService: any, authTokenService: any, toastr: any) {

    const isToken = authTokenService.checkToken();

    if (isToken) {

        authService.validate()

            .pipe()

            .subscribe(
                (res: any) => console.log('[Validate Responce] - ', res),

                (err: any) => {

                    console.log('[Header Error] - Validation request unsuccessful!');

                    toastr.error('[Header Error] - Validation request unsuccessful!');

                    authTokenService.deleteCookieToken();
                })
    }
}