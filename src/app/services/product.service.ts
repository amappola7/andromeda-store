import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, take } from 'rxjs';
import { ProductM } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductM[]> {
    return this.http.get<ProductM[]>(this._url).pipe(
      take(1),
      catchError((error) => {
        console.log('Error getting products', error);
        return of([]);
      })
    )
  }

  getProductById(id: number): Observable<ProductM> {
    return this.http.get<ProductM>(`${this._url}/${id}`).pipe(
      take(1),
      catchError((error) => {
        const voidProduct: ProductM = {
          id: 0,
          name: '',
          description: ''
        };
        console.log('Error getting product', error);
        return of(voidProduct);
      })
    )
  }
}
