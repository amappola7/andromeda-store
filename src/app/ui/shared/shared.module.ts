import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedRoutingModule } from './shared-routing-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    ProductCardComponent,
    ProductFormComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent,
    ProductCardComponent,
    ProductFormComponent,
    NavBarComponent
  ]
})
export class SharedModule { }
