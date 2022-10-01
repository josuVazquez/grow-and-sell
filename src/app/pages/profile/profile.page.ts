import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  data = {
    name: 'Nombre Apellido Apellido',
    email: 'example@example.com',
    phone: '+34 12393123',
    rating: '3.0 / 5.0',
  };

  constructor() {}

  ngOnInit() {}
}
