import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() data: Product;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigate(id: number) {
    this.router.navigate(['/product', id]);
  }

  // TODO: pipe translate
}
