import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../../shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminProductsTableComponent } from './components/admin-products-table/admin-products-table.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminProductsTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
