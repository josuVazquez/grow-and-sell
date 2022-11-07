import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // llamada a productos por id
    this.activatedRoute.queryParams.subscribe((params) => {
      debugger;
      console.log(params);
    });
  }
}
