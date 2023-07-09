import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferFindComponent } from './pages/offer-find/offer-find.component';
import { OfferCreateComponent } from './pages/offer-create/offer-create.component';
import { OfferDetailsComponent } from './pages/offer-details/offer-details.component';
import { urlIdGuard } from 'src/app/middleware/guard/url-id.guard';
import { OfferEditComponent } from './pages/offer-edit/offer-edit.component';
import { roleGuard } from 'src/app/middleware/guard/role.guard';
import { userGuard } from 'src/app/middleware/guard/user.guard';


const routes: Routes = [

    {
        path: '',
        component: OfferFindComponent,
        title: 'Find offer'
    },
    {
        path: 'create',
        component: OfferCreateComponent,
        canActivate: [
           // userGuard,
            roleGuard
        ],
        title: 'Create new offer'
    },
    {
        path: ':id',
        component: OfferDetailsComponent,
        title: 'Offer Details',
        canActivate: [urlIdGuard]
    },
    {
        path: ':id/edit',
        component: OfferEditComponent,
        title: 'Offer Edit',
        canActivate: [urlIdGuard, roleGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class OfferRoutingModule { }