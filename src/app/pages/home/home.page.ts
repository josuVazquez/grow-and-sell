import { Component, OnInit } from '@angular/core';
import { mockProduct } from 'src/app/shared/models/mock/mockProducts';
import { UserService } from '@services/user.service';
import { ProductService } from '@services/product.service';
import { Product } from '@models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  products: Array<Product> = [];
  geocoder = new google.maps.Geocoder();

  constructor(private userService: UserService, private productService: ProductService) {
    this.userService._getUser().subscribe(userInfo => {
      if(!userInfo.lat || !userInfo.lng) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.getListOfProductsByPosition(''+position.coords.latitude, ''+position.coords.longitude);
        });
      } else {
        this.getListOfProductsByPosition(userInfo.lat, userInfo.lng);
      }
    });
  }

  getListOfProductsByPosition(lat: string, lng: string) {
    this.productService.getListOfProducts(lat, lng).then((products: Array<Product>) => this.products = products);
  }

  getCurrentLocation(getProducts) {
    navigator.geolocation.getCurrentPosition(getProducts);
  }

  ngOnInit() {}
}
