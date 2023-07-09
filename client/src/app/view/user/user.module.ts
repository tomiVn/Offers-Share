import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditComponent } from './pages/edit/edit.component';
import { EntityDataModule, EntityDataService, EntityServices } from '@ngrx/data';
import { userEntityConfig } from './config/entity-metadata';
import { UserDefaultService } from './services/user-default.service';
import { UserEntityService } from './services/user-entity.service';
import { RouterModule } from '@angular/router';
import { materials } from './config/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from 'src/app/templates/form/form.module';
import { OfferModule } from "../offer/offer.module";

@NgModule({
    declarations: [
        ProfileComponent,
        EditComponent
    ],
    providers: [UserEntityService],
    imports: [
        CommonModule,
        EntityDataModule.forRoot(userEntityConfig),
        RouterModule,
        ...materials,
        FormModule,
        ReactiveFormsModule,
        OfferModule
    ]
})
export class UserModule {
  constructor(
        
    entityDataService: EntityDataService,
    entityServices   : EntityServices,

    uds              : UserDefaultService,
    ues              : UserEntityService) {

    entityDataService.registerService('User', uds); // <-- register it
    entityServices.registerEntityCollectionServices([ues])
}
 }
