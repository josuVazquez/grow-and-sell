import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { faWallet, faHouse, faPlus, faPerson } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public tabs = [
    {
      id: 'schedule',
      icon: 'calendar-number-outline',
      label: 'Calendario',
      notification: true,
      redirect: '',
    },
    {
      id: 'wallet',
      icon: 'wallet-outline',
      label: 'Cartera',
      notification: false,
      redirect: '',
    },
    {
      id: 'map',
      icon: 'map-outline',
      label: 'Mapa',
      notification: false,
      redirect: '',
    },
    {
      id: 'person',
      icon: 'person-outline',
      label: 'Perfil',
      notification: false,
      redirect: '',
    },
  ];

  constructor(private route: Router) {}

  gotTo(redirect: string) {
    this.route.navigate([redirect]);
  }
}
