import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { NotFoundComponent } from './view/not-found/not-found.component';
import { LoginComponent } from './view/auth/pages/login/login.component';
import { anonymousGuard } from './middleware/guard/anonymous.guard';
import { RegisterComponent } from './view/auth/pages/register/register.component';
import { AboutUsComponent } from './view/about-us/about-us.component';
import { ContactUsComponent } from './view/contact-us/contact-us.component';

const routes: Routes = [

    { path: '', component: HomeComponent },

    { path: 'index.html', pathMatch: 'full', redirectTo: '/' },

    { path: 'about-us', component: AboutUsComponent },

    { path: 'contact-us', component: ContactUsComponent },

    { path: 'auth/log-in', component: LoginComponent, canActivate: [anonymousGuard] },

    { path: 'auth/register', component: RegisterComponent, canActivate: [anonymousGuard] },

    {
        path: 'offer', loadChildren: () => import(`./view/offer/offer-routing.module`)
            .then(module => module.OfferRoutingModule)
    },

    {
        path: 'user', loadChildren: () => import(`./view/user/user-routing.module`)
            .then(module => module.UserRoutingModule)
    },

    {
        path: 'not-found', component: NotFoundComponent
    },

    { path: '**', component: NotFoundComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule { }
