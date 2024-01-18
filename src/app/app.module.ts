import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './ui/pages/product-details/product-details.component';
import { HomeComponent } from './ui/pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './ui/shared/components/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    HomeComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
