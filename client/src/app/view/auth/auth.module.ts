import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { materials } from './config/material';
import { FormModule } from 'src/app/templates/form/form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EntityDataModule, EntityDataService, EntityServices } from '@ngrx/data';
import { authEntityConfig } from './config/entity-metadata';
import { AuthDefaultService } from './services/auth-default.service';
import { AuthEntityService } from './services/auth-entity.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CookieService } from 'ngx-cookie-service';



@NgModule({

    declarations: [
        LoginComponent,
        RegisterComponent],

    imports: [
        
        CommonModule,
        EntityDataModule.forRoot(authEntityConfig),
        ...materials,
        FormModule,
        ReactiveFormsModule,
        AppRoutingModule,
    ],

    providers: [AuthEntityService, CookieService]

})
export class AuthModule {

    constructor(

        entityDataService: EntityDataService,
        entityServices: EntityServices,

        ads: AuthDefaultService,
        aes: AuthEntityService) {

        entityDataService.registerService('Auth', ads); // <-- register it
        entityServices.registerEntityCollectionServices([aes])
    }
}
