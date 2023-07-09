import { Component, OnDestroy, inject } from '@angular/core';
import { take, takeWhile} from 'rxjs';
import { IRegister } from '../../interfaces/register.interface';
import { Router } from '@angular/router';
import { useAuthFn } from '../../config/use.auth';
import { registerFn } from '../../helpers/register/register';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {

    router                    = inject(Router);
    useAuth                   = useAuthFn();

    authTokenService          = this.useAuth.serviceToken;
    authRegisterService       = this.useAuth.serviceEntity;
    registerForm              = this.useAuth.serviceForm.createRegisterForm()
    FormModels                = this.registerForm .models;
    form                      = this.registerForm .form; 
    toastr                    = this.useAuth.toastr;

    isAlive: boolean          = true;

    actionForm = (form: any) => registerFn.call(this, form); 

    ngOnDestroy() {
        
        this.isAlive = false;
    }
}
