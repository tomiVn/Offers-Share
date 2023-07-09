import { response } from "src/app/utils/methods/response";

export function handleExpiredToken(authTokenService: any, authService: any, toastr: any, router: any): void {
    
    authTokenService.deleteCookieToken();
    
    authService.userReset();
    
    response.info(toastr, 'Your session has expired!', 'Please Log In again.');
    
    router.navigate(['/auth/log-in']);
}