import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const homePaths: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(homePaths)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
