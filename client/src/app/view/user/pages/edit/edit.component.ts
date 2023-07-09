import { Component, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { useUserFn } from '../../config/use.user';
import { updateProfileFn } from '../../helpers/edit/update.profile';
import { loadUser } from '../../helpers/load.user';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
    
    route                 = inject(ActivatedRoute);
    router                = inject(Router);
    ref                   = inject(ElementRef);
    store                 = inject(Store);

    useUser               = useUserFn();
    userEntityService     = this.useUser.serviceEntity;
    collectionUserService = this.useUser.serviceCollection;

    toastr                = this.useUser.toastr;
    formService           = this.useUser.serviceForm.createUserDetailsForm();
    form                  = this.formService.form;
    FormModels            = this.formService.models;
    isAlive               = true;

    user: any;
    
    ngOnInit(): void {
        
        loadUser.call(this);   
    }

    updateProfile = (userform: any) => updateProfileFn.call(this, userform)

    ngOnDestroy(): void {

        this.isAlive = false;
    }
}
