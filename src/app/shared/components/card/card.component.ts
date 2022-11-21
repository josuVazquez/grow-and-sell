import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@services/user.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() data: Product;
  isFavorite = false;

  constructor(private router: Router, private userService: UserService) {}

  navigate(id: number) {
    this.router.navigate(['/product', id]);
  }

  async setFavorites(event: Event) {
    event.stopPropagation();
    const userData = await this.userService.getUser();
    userData.products.push(this.data);
    this.userService.updateUser(userData);
    this.toggleFavorite();
  }

  async unsetFavorites(event: Event) {
    event.stopPropagation();

    const userData = await this.userService.getUser();
    userData.products.filter((product) => product.id !== this.data.uid);

    this.userService.updateUser(userData);

    this.toggleFavorite();
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  // TODO: pipe translate
}
