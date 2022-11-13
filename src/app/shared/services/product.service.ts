import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  // getListOfProducts(): Promise<any> {
  //   return this.httpClient.put(`${environment.backUrl}product`).toPromise();
  // }

  getProductById(id: string): Observable<any> {
    return this.httpClient.get(`${environment.backUrl}product/${id}`);
  }

  createProduct(product: Product) {
    return this.httpClient
      .post(`${environment.backUrl}product`, product)
      .toPromise();
  }
}
