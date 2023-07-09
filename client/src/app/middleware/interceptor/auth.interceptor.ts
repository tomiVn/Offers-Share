import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { EMPTY, Observable } from "rxjs";
import { handleExpiredToken } from "src/app/view/auth/helpers/expired.token";
import { useAuthFn } from "src/app/view/auth/config/use.auth";

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
    
    useAuth          = useAuthFn();

    authTokenService = this.useAuth.serviceToken;
    authService      = this.useAuth.serviceEntity;
    toastr           = this.useAuth.toastr;

    router           = inject(Router);

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.authTokenService.getCookieToken();

        if (token) {

            const decodedToken = this.authTokenService.decodeToken(token);

            if (this.authTokenService.isTokenExpired(decodedToken)) {

                handleExpiredToken(this.authTokenService, this.authService, this.toastr, this.router);
                return EMPTY;
            }

            request = request.clone({ setHeaders: { 'x-authorization': token } });
        }

        return next.handle(request)
    }
}