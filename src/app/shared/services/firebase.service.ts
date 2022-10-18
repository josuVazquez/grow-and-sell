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

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    private userService: UserService,
    private router: Router) {
  }

  async setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user || {}));
    if(!user) {
      return;
    }
    const token = await user?.getIdToken();
    localStorage.setItem('token', token);

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

  async SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `users/${user.uid}`
    );
    this.ngFireAuth.authState.subscribe(async(us) => {
      await this.setUser(us);
      const ourUser = await this.userService.createUser(user);
      console.log(ourUser)
      this.userService.setUser(new User(ourUser));
    });
    return userRef.set(user, {
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
    this.ngFireAuth.authState.subscribe(async(user) => {
      await this.setUser(user);
      const ourUser = await this.userService.getUser();
      console.log(ourUser)
      this.userService.setUser(new User(ourUser));
    });
  }
}
