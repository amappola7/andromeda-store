import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, take, tap } from 'rxjs';
import { ProductM, RawProductM } from '../models/product';

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
          description: '',
          price: 0,
          image: ''
        };
        console.log('Error getting product', error);
        return of(voidProduct);
      })
    )
  }

  createProduct(productData: RawProductM): Observable<ProductM | null> {
    return this.http.post<ProductM>(this._url, productData).pipe(
      take(1),
      tap(() => console.log('Product successfully created')),
      catchError((error) => {
        console.log('Error creating product', error);
        return of(null);
      })
    )
  }
}
