import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { detailsPageGuard } from 'src/app/guards/details-page.guard';

const productPaths: Routes = [
  {
    path: 'details/:id',
    component: ProductDetailsComponent,
    canActivate: [detailsPageGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(productPaths)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
