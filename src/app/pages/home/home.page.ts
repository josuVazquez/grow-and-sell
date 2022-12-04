import { Component, OnInit } from '@angular/core';
import { mockProduct } from 'src/app/shared/models/mock/mockProducts';
import { UserService } from '@services/user.service';
import { ProductService } from '@services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cardExample: any = mockProduct;

  constructor(private userService: UserService, private productService: ProductService) {
    this.userService._getUser().subscribe(userInfo => {
      this.productService.getListOfProducts(userInfo.lat, userInfo.lng).then(r => console.log(r));
      // userInfo.lat
      // userInfo.lng
    });
  }

  ngOnInit() {}
}
