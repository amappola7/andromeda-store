import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './ui/pages/product-details/product-details.component';
import { HomeComponent } from './ui/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./ui/pages/pages.module').then(m => m.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
