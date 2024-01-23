import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';

const productPaths: Routes = [
  {
    path: 'details/:id',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(productPaths)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
