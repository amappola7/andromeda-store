import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './ui/shared/shared.module';
import { CommonModule } from '@angular/common';
import { AuthModule } from './ui/pages/auth/auth/auth.module';
import { AdminModule } from './ui/pages/admin/admin.module';
import { HomeModule } from './ui/pages/home/home.module';
import { ProductModule } from './ui/pages/product/product.module';

@NgModule({
  declarations: [
    AppComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
