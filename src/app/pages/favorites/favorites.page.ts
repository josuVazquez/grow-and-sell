import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  cardExample = [
    {
      id: 1,
      img: 'assets/products/patata-propiedades.jpg',
      title: 'Patatas',
      subtitle: '5 kilos patatas',
      description: '5 kilos patatas por 3 euro, no negocio',
    },
    {
      id: 2,
      img: 'assets/products/patata-propiedades.jpg',
      title: 'Patatas',
      subtitle: '5 kilos patatas',
      description: '5 kilos patatas por 3 euro, no negocio',
    },
  ];

  constructor() {}

  ngOnInit() {}

  deleteItem() {}
}
