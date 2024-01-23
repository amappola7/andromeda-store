import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const productPaths: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(productPaths)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
