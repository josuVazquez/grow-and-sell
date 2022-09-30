import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore, AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    private userService: UserService,
    private router: Router,
    private ngZone: NgZone) {
    this.ngFireAuth.authState.subscribe((user) => {
      this.setUser(user ? new User({...user}) : null)
    });
  }

  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user || {}));
    this.userService.setUser(user)
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

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }

  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.emailVerified !== false ? true : false;
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
          ...result.credential});
          this.ngZone.run(() => {
            this.router.navigate(['home']);
          });
      })
      .catch((error) => {
        console.log(error)
        window.alert(error);
      });
  }

  SetUserData(user) {
    console.log(user)
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `users/${user.uid}`
    );
    const us = new User({...user});
    console.log(us)
    this.setUser(us);
    return userRef.set(us.toObject(), {
      merge: true,
    });
  }

  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      this.router.navigate(['home']);
    });
  }
}
