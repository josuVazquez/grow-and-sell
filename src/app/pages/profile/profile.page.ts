import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  userForm = new FormGroup({
    displayName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [])
  });

  constructor(
    public userService: UserService,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.userService._getUser().subscribe((dt) => {
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

  saveChanges() {
    const user = this.userForm.getRawValue();
    this.userService.updateUser(user);
  }
}
