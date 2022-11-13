import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { mockProduct } from 'src/app/shared/models/mock/mockProducts';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cardExample: any = mockProduct;

  constructor() {}

  ngOnInit() {}
}
