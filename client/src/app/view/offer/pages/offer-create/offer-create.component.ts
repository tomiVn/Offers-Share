import { Component, ElementRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataAppend } from 'src/app/templates/form/helpers/form-data-append';
import { useOfferFn } from '../../config/use.offer';
import { actionFormFn } from '../../helpers/offer-create/action.form';
import { uploadImgFn } from '../../helpers/offer-create/upload.img';
import { selectedImgFn } from '../../helpers/offer-create/selected.img';
import { cancelImgFn } from '../../helpers/offer-create/cancel.img';
import { useUserFn } from 'src/app/view/user/config/use.user';


@Component({
    selector: 'app-offer-create',
    templateUrl: './offer-create.component.html',
    styleUrls: ['./offer-create.component.css']
})
export class OfferCreateComponent {

    router                 = inject(Router);
    ref                    = inject(ElementRef);
    useOffer               = useOfferFn();    
    offerFormService       = this.useOffer.serviceForm.createOffer();

    useUser                = useUserFn();
    userEntityService      = this.useUser.serviceEntity;

    FormModels             = this.offerFormService.models;   
    form                   = this.offerFormService.form;
    toastr                 = this.useOffer.toastr;
    uploadButtonVisibility = true;
    isAlive:  boolean      = true;
    uploadImage: string    = '';

    actionForm             = () => actionFormFn.call(this, FormDataAppend)

    upload                 = () => uploadImgFn.call(this);

    selectedImg            = (img: string) => selectedImgFn.call(this, img)
       
    cancel                 = () => cancelImgFn.call(this);
}