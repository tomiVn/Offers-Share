import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferFindComponent } from './pages/offer-find/offer-find.component';
import { EntityDataModule, EntityDataService, EntityServices } from '@ngrx/data';
import { offerEntityConfig } from './config/entity-metadata';
import { OfferEntityService } from './services/offer-entity.service';
import { OfferDefaultService } from './services/offer-default.service';
import { OfferBasicTemplateComponent } from './template/offer-basic-template/offer-basic-template.component';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { FormModule } from 'src/app/templates/form/form.module';
import { ReactiveFormsModule } from '@angular/forms'; 
import { OfferCreateComponent } from './pages/offer-create/offer-create.component'; 
import { materials } from './config/material';
import { OfferDetailsComponent } from './pages/offer-details/offer-details.component';
import { OfferEditComponent } from './pages/offer-edit/offer-edit.component';

@NgModule({

    declarations: [
        OfferFindComponent,
        OfferBasicTemplateComponent,
        OfferCreateComponent,
        OfferDetailsComponent,
        OfferEditComponent ],

    imports: [
        CommonModule,
        EntityDataModule.forRoot(offerEntityConfig),
        ...materials,
        FormModule,
        NgOptimizedImage,
        RouterModule,
        ReactiveFormsModule ],

    exports:[
     OfferBasicTemplateComponent
    ],    

    providers: [OfferEntityService,]

})
export class OfferModule {

    constructor(
        
        entityDataService: EntityDataService,
        entityServices   : EntityServices,

        ods              : OfferDefaultService,
        oes              : OfferEntityService) {

        entityDataService.registerService('Offer', ods); // <-- register it
        entityServices.registerEntityCollectionServices([oes])
    }

}

