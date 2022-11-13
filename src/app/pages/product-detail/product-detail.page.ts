import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  product$: Observable<Product>;

  constructor(private productService: ProductService, private router: Router) {
    const id = this.router.url.split('/')[2];
    this.product$ = this.productService.getProductById(id);
  }

  ngOnInit() {
    // const product = await this.productService.
    // llamada a productos por id: 63712275b0165f4bd8897a4c
  }
}
