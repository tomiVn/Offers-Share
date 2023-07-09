import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticPageTemplateComponent } from './static-page-template/static-page-template.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StaticPageTemplateComponent
  ],
  exports: [
    StaticPageTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class StaticPageModule { }
