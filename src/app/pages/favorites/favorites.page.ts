import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  cardExample: Product[] = [
    {
      id: 1,
      img: 'assets/products/patata-propiedades.jpg',
      title: 'Patatas',
      subtitle: '5 kilos patatas',
      description: '5 kilos patatas por 3 euro, no negocio',
      price: 5.122,
    },
    {
      id: 2,
      img: 'assets/products/patata-propiedades.jpg',
      title: 'Patatas',
      subtitle: '5 kilos patatas',
      description: '5 kilos patatas por 3 euro, no negocio',
      price: 2.3,
    },
  ];

  constructor() {}

  ngOnInit() {}

  deleteItem() {}
}
