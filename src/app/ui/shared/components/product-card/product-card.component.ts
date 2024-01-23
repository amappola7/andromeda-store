import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductM } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: ProductM;
  @Input() page!: string;

  constructor(
    private router: Router
  ) {}

  onClick(productId: number) {
    this.router.navigate([`/product/details/${productId}`]);
  }
}