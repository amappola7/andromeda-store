import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
