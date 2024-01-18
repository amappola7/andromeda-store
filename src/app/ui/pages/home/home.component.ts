import { Component, OnInit } from '@angular/core';
import { ProductM } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  productsList: ProductM[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe((products) => {
      this.productsList = products;
    })
  }
}
