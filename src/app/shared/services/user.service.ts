import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(new User());
  constructor() { }

  setUser(user: User) {
    this.userSubject.next(user);
  }

  _getUser() {
    return this.userSubject.asObservable();
  }

  getUser() {
    return this.userSubject.getValue();
  }
}
