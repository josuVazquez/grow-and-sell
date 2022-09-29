import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faWallet, faHouse, faPlus, faPerson } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public tabs = [
    {
      icon: faHouse,
      text: 'buttons.home',
      redirect: '/'
    },
    {
      icon: faWallet,
      text: 'buttons.portfolio',
      redirect: '/portfolio'
    },
    {
      icon: faPlus,
      text: 'buttons.new',
      redirect: '/new'
    },
    {
      icon: faPerson,
      text: 'buttons.profile',
      redirect: '/profile'
    }
  ];

  constructor(private route: Router) {}

  gotTo(redirect: string) {
    this.route.navigate([redirect])
  }

}
