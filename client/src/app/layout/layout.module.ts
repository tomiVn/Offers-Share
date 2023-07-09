import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { FormModule } from "../templates/form/form.module";
import { material } from './config/material.inputs';

const components = [
    HeaderComponent,
    SidenavComponent,
    FooterComponent
];

@NgModule({

    declarations: [
        ...components,
    ],

    exports: components,
    
    imports: [
        CommonModule,
        ...material,
        RouterModule,
        ReactiveFormsModule,
        NgOptimizedImage,
        FormModule
    ]
})
export class LayoutModule { }
