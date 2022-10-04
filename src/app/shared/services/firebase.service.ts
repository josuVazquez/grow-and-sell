import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { User } from '../models/user.model';
import { UserService } from './user.service';

import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    private userService: UserService,
    private router: Router
  ) {
    // this.ngFireAuth.authState.subscribe((user) => {
    //   this.setUser(user ? new User({...user}) : null)
    // });
  }

  setUser(user: User) {
    console.log('setting');
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user || {}));
    this.userService.setUser(user);
  }

  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  RegisterUser(email, password) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  SendVerificationMail() {
    return this.ngFireAuth.currentUser.then((user) => {
      return user.sendEmailVerification().then(() => {
        this.router.navigate(['login']);
      });
    });
  }

  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert(
          'Password reset email has been sent, please check your inbox.'
        );
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  AuthLogin(provider) {
    return this.ngFireAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.SetUserData({
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          emailVerified: result.user.emailVerified,
          ...result.credential,
        });
      })
      .catch((error) => {
        console.log(error);
        window.alert(error);
      });
  }

  SetUserData(user) {
    console.log(user);
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `users/${user.uid}`
    );
    const us = new User({ ...user });
    this.setUser(us);
    return userRef.set(us.toObject(), {
      merge: true,
    });
  }

  SignOut() {
    this.userService.deleteUserData();
    return this.ngFireAuth.signOut().then(() => {
      this.router.navigate(['home']);
    });
  }

  tryToReload() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.idToken && !helper.isTokenExpired(user.idToken)) {
      this.setUser({ ...user });
    }
  }
}
