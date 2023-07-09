import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Base64 } from 'js-base64';

@Injectable({
    providedIn: 'root'
})
export class AuthTokenService {

    COOKIE_NAME  = 'x-auth'
    tokenService = inject(CookieService);

    secure       = false;
    path         = '/';
    domain       = 'offers-share.westeurope.azurecontainer.io';
    //domain       = 'localhost';
    sameSite     = 'Lax';

    setCookieToken(token: string) {
        //secure true for hhtps and false for http
        return this.tokenService
        .set(this.COOKIE_NAME, token, { secure: this.secure, path: this.path, domain: this.domain, sameSite: 'Lax' });
        //    .set(this.COOKIE_NAME, token, { secure: false, path: '/', domain: 'app-offer.westeurope.azurecontainer.io', sameSite: 'Lax' });
    }

    getCookieToken() {

        return this.tokenService.get(this.COOKIE_NAME);
    }

    deleteCookieToken() {
         //secure true for hhtps and false for http
        this.tokenService.delete(this.COOKIE_NAME, this.path, this.domain, this.secure, 'Lax');
        //this.tokenService.delete(this.COOKIE_NAME, '/', 'app-offer.westeurope.azurecontainer.io', false, 'Lax');
    }

    checkToken() {

        return this.tokenService.check(this.COOKIE_NAME)
    }

    decodeToken(token: string): any {
        
        const tokenPayload = token.split('.')[1];
        const decodedPayload = JSON.parse(Base64.decode(tokenPayload));
        return decodedPayload;
    }

    isTokenExpired(decodedToken: any): boolean {
        
        const expirationDate = decodedToken.exp * 1000;
        return Date.now() >= expirationDate;
    }

}
