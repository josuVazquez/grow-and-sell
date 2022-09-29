import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoginModalComponent } from 'src/app/shared/components/login-modal/login-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router, private modalController: ModalController) {}

  clickHome() {
    this.router.navigate(['home']);
  }

  async openLoginModal() {
    console.log('h1')
    const modal = await this.modalController.create({
      component: LoginModalComponent
    });
    modal.present();
  }

  openChat() {
    this.router.navigate(['chat']);
  }

  uploadProduct() {
    this.router.navigate(['upload']);
  }
}
