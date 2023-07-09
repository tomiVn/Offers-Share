import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Input, OnInit, inject } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
//import { sideNavInit } from '../helpers/header/sidenav.heared';
import { logOutFn } from '../helpers/header/log-out';
//import { validate } from '../helpers/validate.header';
import { useAuthFn } from 'src/app/view/auth/config/use.auth';
import { sideNavInitFn } from '../helpers/header/sidenav';
import { loadUserFn } from '../helpers/header/load-user';
import { getUserFn } from '../helpers/header/get-user';
import { useUserFn } from 'src/app/view/user/config/use.user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    router                = inject(Router);
    observer              = inject(BreakpointObserver);
    cdr                   = inject(ChangeDetectorRef);

    useAuth               = useAuthFn();
    authTokenService      = this.useAuth.serviceToken;
    authEntityService     = this.useAuth.serviceEntity;
    toastr                = this.useAuth.toastr;
    collectionAuthService = this.useAuth.serviceCollection;

    useUser               = useUserFn();
    userCollectionService = this.useUser.serviceCollection;
    
    isUser: boolean       = false;
    user: any             = undefined;

    @Input() sideNav!: MatSidenav;

    ngOnInit(): void {
              
        loadUserFn.call(this);
        getUserFn.call(this);
    }

    ngAfterViewInit(): void {

        sideNavInitFn.call(this);     
    }

    logOut = () => this.isUser = logOutFn.call(this);

    userRoleRequirement(role: string) {

        return ['admin', 'staff', 'partner'].some(x => x === role);
    }
}