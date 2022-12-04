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
export class CardComponent implements OnInit, OnDestroy {
  @Input() data: Product;
  favorite: boolean = false;

  userSubscription: Subscription;

  constructor(private router: Router, private userService: UserService) {
    this.userSubscription = userService._getUser().subscribe( user => {
      console.log(user)
      this.favorite = user?.favorites.some(fav => fav === this.data._id);
    });;
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  ngOnInit() {}

  navigate(id: string) {
    this.router.navigate(['/product', id]);
  }

  setFavorites(event: Event) {
    event.stopPropagation();
    console.log('clicked');
  }

}
