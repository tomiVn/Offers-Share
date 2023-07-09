import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { useOfferFn } from '../../config/use.offer';
import { FormDataAppend } from 'src/app/templates/form/helpers/form-data-append';
import { actionFormFn } from '../../helpers/offer-edit/action.form';
import { loadOffersFn } from '../../helpers/load.offers';
import { uploadImgFn } from '../../helpers/offer-edit/upload.img';
import { selectedImgFn } from '../../helpers/offer-edit/selected.img';
import { cancelImgFn } from '../../helpers/offer-edit/cancel.img';
import { currentOfferFn } from '../../helpers/offer-edit/current.offer';
import { useAuthFn } from 'src/app/view/auth/config/use.auth';

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferEditComponent implements OnInit{
  
  route                  = inject(ActivatedRoute);
  router                 = inject(Router);
  ref                    = inject(ElementRef);
  cdr                    = inject(ChangeDetectorRef);
  
  useOffer               = useOfferFn();
  offerEntityService     = this.useOffer.serviceEntity;
  collectionOfferService = this.useOffer.serviceCollection;
  toastr                 = this.useOffer.toastr;  
  
  offerFormService       = this.useOffer.serviceForm.createOffer();
  FormModels             = this.offerFormService.models;   
  form                   = this.offerFormService.form;

  useAuth                = useAuthFn();
  collectionAuthService  = this.useAuth.serviceCollection;
  entitiesAuthService    = this.useAuth.serviceEntity;

  isAlive                = true;    
  uploadButtonVisibility = false;
  uploadImage: string    = '';
  currentOffer:  any;
  
  ngOnInit(): void {

    loadOffersFn.call(this);

    currentOfferFn.call(this, true);

    this.cdr.detectChanges();
  }

  actionForm =  () => actionFormFn.call(this, FormDataAppend)

  upload =      () => uploadImgFn.call(this);

  selectedImg = (img: string) => selectedImgFn.call(this, img)

  cancel =      () => cancelImgFn.call(this);
}
