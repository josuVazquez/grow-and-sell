import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public tabs = [
    {
      id: 'home',
      icon: 'home-outline',
      label: 'Home',
      redirect: 'home',
    },
    {
      id: 'favorites',
      icon: 'heart-outline',
      label: 'Favoritos',
      redirect: 'favorites',
    },
    {
      id: 'upload',
      icon: 'add-circle-outline',
      label: 'Upload',
      redirect: 'upload',
    },
    {
      id: 'chat',
      icon: 'chatbubble-outline',
      label: 'Chat',
      notification: 2,
      redirect: 'chat',
    },
    {
      id: 'profile',
      icon: 'person-outline',
      label: 'You',
      redirect: 'profile',
    },
  ];

  constructor() {}

}
