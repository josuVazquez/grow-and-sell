import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  userForm = new FormGroup({
    displayName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [])
  });

  constructor(public userService: UserService,
    private firebaseService: FirebaseService) {
  }

  logout() {
    this.firebaseService.SignOut();
  }

  saveChanges() {
    const user = this.userForm.getRawValue();
    this.userService.updateUser(user);
  }

}
