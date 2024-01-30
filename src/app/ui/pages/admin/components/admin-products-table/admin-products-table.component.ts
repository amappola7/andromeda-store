import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductM } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-products-table',
  templateUrl: './admin-products-table.component.html',
  styleUrls: ['./admin-products-table.component.scss']
})
export class AdminProductsTableComponent implements OnInit {
  productList$!: Observable<ProductM[]>;

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productList$ = this.productService.getProducts();
  }

}
