import { Component, OnInit } from '@angular/core';
import { Product } from '@models/product.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  cardExample: Product[] = [
    {
      uid: 1,
      img: ['assets/products/patata-propiedades.jpg'],
      title: 'Patatas',
      category: '',
      description: '5 kilos patatas por 3 euro, no negocio',
      price: 5.122,
      currency: '€'
    },
    {
      uid: 2,
      img: ['assets/products/patata-propiedades.jpg'],
      title: 'Patatas',
      category: '',
      description: '5 kilos patatas por 3 euro, no negocio',
      price: 2.3,
      currency: '€'
    },
  ];

  constructor() {}

  ngOnInit() {}

  deleteItem() {}
}
