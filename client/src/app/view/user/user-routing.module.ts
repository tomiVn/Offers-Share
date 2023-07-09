import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userGuard } from 'src/app/middleware/guard/user.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditComponent } from './pages/edit/edit.component';
import { urlIdGuard } from 'src/app/middleware/guard/url-id.guard';
import { NotFoundComponent } from '../not-found/not-found.component';
import { profileOwnerGuard } from 'src/app/middleware/guard/profile-owner.guard';


const routes: Routes = [

    {
        path: ':id',
        component: ProfileComponent,
        title: 'User profile',
        canActivate: [
            urlIdGuard, 
            userGuard,
            profileOwnerGuard
        ],
    },
    {
        path: ':id/edit',
        component: EditComponent,
        title: 'Edit user information',
        canActivate: [
            urlIdGuard, 
            userGuard,
            profileOwnerGuard
        ]
    },
    {
        path: '',
        component: NotFoundComponent,
        title: 'Not correct path'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }