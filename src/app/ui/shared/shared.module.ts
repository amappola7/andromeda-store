import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { PagesRoutingModule } from '../pages/pages-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    ProductCardComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    HeaderComponent,
    ProductCardComponent,
    ProductFormComponent
  ]
})
export class SharedModule { }
