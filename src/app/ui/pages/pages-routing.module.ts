import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFormComponent } from '../shared/components/product-form/product-form.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // children: [
    //   {
    //     path: 'products/:id',
    //     component: ProductDetailsComponent
    //   },
    //   {
    //     path: 'create-product',
    //     component: ProductFormComponent
    //   }
    // ]
  }
  ,
  {
    path: 'products/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'create-product',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }