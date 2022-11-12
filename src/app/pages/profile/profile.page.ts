import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  data: User;
  // data = {
  //   img: '',
  //   name: 'Nombre Apellido Apellido',
  //   email: 'example@example.com',
  //   phone: '+34 12393123',
  //   rating: '3.0 / 5.0',
  // };

  constructor(
    public userService: UserService,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    // faltaria un rating y un numero de telefono opcional (?)
    this.userService._getUser().subscribe((dt) => {
      debugger;
      this.data = {
        ...this.data,
        displayName: dt.displayName,
        email: dt.email,
        photoURL: dt.photoURL,
      };
    });
  }

  logout() {
    this.firebaseService.SignOut();
  }
}
