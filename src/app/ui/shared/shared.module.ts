import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ProductCardComponent,
    ProductFormComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    ProductCardComponent,
    ProductFormComponent,
    NavBarComponent
  ]
})
export class SharedModule { }