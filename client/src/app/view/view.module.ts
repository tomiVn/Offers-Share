import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { OfferModule }   from './offer/offer.module';
import { AuthModule }    from './auth/auth.module';
import { UserModule }    from './user/user.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { StaticPageModule } from "../templates/static-page/static-page.module";
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const materials = [
    MatCardModule
];

const modules = [OfferModule, AuthModule, UserModule, StaticPageModule]

@NgModule({
    declarations: [HomeComponent, NotFoundComponent, AboutUsComponent, ContactUsComponent],
    imports: [
        CommonModule,
        ...materials,
        ...modules
    ]
})

export class ViewModule { }
