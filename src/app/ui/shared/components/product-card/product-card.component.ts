import { Component, Input } from '@angular/core';
import { ProductM } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: ProductM;
  @Input() page!: string;
}