import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  // getListOfProducts(): Promise<any> {
  //   return this.httpClient.put(`${environment.backUrl}product`).toPromise();
  // }

  // getProductById(id: number): Promise<any> {
  //   return this.httpClient.get(`${environment.backUrl}product`, id).toPromise();
  // }

  createProduct(product: Partial<Product>) {
    return this.httpClient
      .put(`${environment.backUrl}product`, product)
      .toPromise();
  }
}
