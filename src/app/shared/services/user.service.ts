import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private emptyObject = new User();
  private userSubject = new BehaviorSubject<User>(new User());

  constructor(
    private localStorage: LocalStorageService,
    private httpClient: HttpClient
  ) {}

  setUser(user: User) {
    this.userSubject.next(user);
  }

  _getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  deleteUserData() {
    this.userSubject.next(this.emptyObject);
    this.localStorage.removeData('token');
    this.localStorage.removeData('user');
  }

  updateUser(user: Partial<User>): Promise<any> {
    return this.httpClient.put(`${environment.backUrl}user`, user).toPromise();
  }

  getUser(): Promise<any> {
    return this.httpClient.get(`${environment.backUrl}user`).toPromise();
  }

  createUser(user: User): Promise<any> {
    return this.httpClient.post(`${environment.backUrl}user`, user).toPromise();
  }
}
