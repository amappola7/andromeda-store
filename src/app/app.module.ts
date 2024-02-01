import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './ui/shared/shared.module';
import { CommonModule } from '@angular/common';
import { AuthModule } from './ui/pages/auth/auth.module';
import { AdminModule } from './ui/pages/admin/admin.module';
import { HomeModule } from './ui/pages/home/home.module';
import { ProductModule } from './ui/pages/product/product.module';
import { PageNotFoundComponent } from './ui/pages/page-not-found/page-not-found.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    AdminModule,
    HomeModule,
    ProductModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
