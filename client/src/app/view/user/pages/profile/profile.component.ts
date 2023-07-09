import { Component, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { useUserFn } from '../../config/use.user';
import { loadUser } from '../../helpers/load.user';
import { uploadImgFn } from '../../helpers/profile/upload.img';
import { cancelImgFn } from '../../helpers/profile/cancel.img';
import { selectedImgFn } from '../../helpers/profile/selected.img';
import { updateImgFn } from '../../helpers/profile/update.img';
import { Store } from '@ngrx/store';
import { useOfferFn } from 'src/app/view/offer/config/use.offer';
import { useAuthFn } from 'src/app/view/auth/config/use.auth';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit, OnDestroy {

    route                     = inject(ActivatedRoute);
    router                    = inject(Router);
    ref                       = inject(ElementRef);
    store                     = inject(Store);
    
    useUser                   = useUserFn();
    userEntityService         = this.useUser.serviceEntity;
    collectionUserService     = this.useUser.serviceCollection;

    useOffer                  = useOfferFn();
    offerEntityService        = this.useOffer.serviceEntity;
    offerCollectionService    = this.useOffer.serviceCollection;
    watchedOffers             = [];
    createdOffers             = [];

    useAuth                   = useAuthFn();
    authTokenService          = this.useAuth.serviceToken;
    
    toastr                    = this.useUser.toastr;
    formService               = this.useUser.serviceForm.createUserAvatarForm();
    form                      = this.formService.form;
    FormModels                = this.formService.models; 
    isAlive                   = true;
    
    user: any                 = undefined;
    offersCreatedFromUser: any;
    
    showUpdateButton: boolean = false;
    
    ngOnInit(): void {
        
        // if(this.authTokenService.checkToken())

        loadUser.call(this, true);

    }

    upload = () => uploadImgFn.call(this);

    cancel = () => cancelImgFn.call(this);
    
    select = (img: string) => selectedImgFn.call(this, img);

    update = () =>  updateImgFn.call(this);

    ngOnDestroy(): void {
        
        this.isAlive = false;
    }
}