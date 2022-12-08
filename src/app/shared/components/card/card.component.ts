import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@models/user.model';
import { UserService } from '@services/user.service';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit, OnDestroy{
  @Input() data: Product;
  userPromise: Subscription;
  favorite = false;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnDestroy(): void {
    this.userPromise.unsubscribe();
  }
  ngOnInit(): void {
    this.userPromise = this.userService._getUser().subscribe((user: User) => {
      this.favorite = user?.favorites?.some(fav => fav === this.data._id);
    });
  }

  navigate(id: string) {
    this.router.navigate(['/product', id]);
  }

  toggleFavorite() {
    if(this.favorite) {
      this.userService.removeFavoriteProduct(this.data._id)
    } else {
      this.userService.addFavoriteProduct(this.data._id)
    }
  }

}
