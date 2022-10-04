import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  data = {
    img: '',
    name: 'Nombre Apellido Apellido',
    email: 'example@example.com',
    phone: '+34 12393123',
    rating: '3.0 / 5.0',
  };

  constructor(private userService: UserService) {}

  ngOnInit() {
    // faltaria un rating y un numero de telefono opcional (?)
    this.userService._getUser().subscribe((dt) => {
      this.data = {
        ...this.data,
        name: dt.displayName,
        email: dt.email,
        img: dt.photoURL,
      };
    });
  }
}
