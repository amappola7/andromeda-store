import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ProductCardComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    ProductCardComponent,
    ProductFormComponent
  ]
})
export class SharedModule { }
