import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private emptyObject = new User();
  private userSubject = new BehaviorSubject<User>(new User());

  constructor(private localStorage: LocalStorageService, private httpClient: HttpClient) {}

  setUser(user: User) {
    this.userSubject.next(user);
  }

  _getUser() {
    return this.userSubject.asObservable();
  }

  getUser() {
    return this.userSubject.getValue();
  }

  deleteUserData() {
    this.userSubject.next(this.emptyObject);
    this.localStorage.removeData('user');
  }

  updateUser(user) {
    return this.httpClient.put(`${environment.backUrl}user`, user).subscribe(res => console.log(res));
  }
}
