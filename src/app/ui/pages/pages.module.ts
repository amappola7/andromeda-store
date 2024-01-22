import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PagesRoutingModule } from './pages-routing.module';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
