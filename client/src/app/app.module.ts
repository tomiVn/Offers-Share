import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ngrx } from './config/ngrx';
import { modules } from './config/modules';
import { toastr } from './config/toastr';
import { AuthInterceptor } from './middleware/interceptor/auth.interceptor';

@NgModule({

  declarations: [AppComponent],

  imports: [
    ...ngrx,
    ...modules,
    AppRoutingModule,

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatSidenavModule,
    toastr],
  

  providers: [{
    provide: HTTP_INTERCEPTORS, //important
    useClass: AuthInterceptor,
    multi: true,
  }],

  bootstrap: [AppComponent]

})
export class AppModule { }
