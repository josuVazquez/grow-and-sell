import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ModalController } from '@ionic/angular';
import { LoginModalComponent } from '../components/login-modal/login-modal.component';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private modalController: ModalController) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');
    const activated = !token || !helper.isTokenExpired(token);
    if(!activated) {
      this.openModal();
    }
    return activated;
  }
  
  async openModal() {
    const modal = await this.modalController.create({
      component: LoginModalComponent,
      cssClass: 'modal--small',
    });
    modal.present();
  }
}
