import { Component, OnDestroy, inject} from '@angular/core';
import { ILogIn } from '../../interfaces/log-in.interface';
import { Observable, take, takeWhile } from 'rxjs';
import { useAuthFn } from '../../config/use.auth';
import { Router } from '@angular/router';
import { loginFn } from '../../helpers/login/login';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {

    useAuth             = useAuthFn();

    authEntityService   = this.useAuth.serviceEntity;
    authTokenService    = this.useAuth.serviceToken;
    loginForm           = this.useAuth.serviceForm.createLogInForm();
    FormModels          = this.loginForm.models;
    form                = this.loginForm.form;
    toastr              = this.useAuth.toastr;

    router              = inject(Router)

    isAlive:  boolean   = true;
    errors$!: Observable<any>;
 
    actionForm = (formdata: ILogIn) => loginFn.call(this, formdata) 

    ngOnDestroy() {
        
        this.isAlive = false;
    }
}
