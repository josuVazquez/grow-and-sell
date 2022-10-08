import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoginModalComponent } from 'src/app/shared/components/login-modal/login-modal.component';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logged: Boolean;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService._getUser().subscribe((userData) => {
      console.log(userData)
      this.logged = !!userData?.email;
    });
  }

  clickHome() {
    this.router.navigate(['home']);
  }

  async openLoginModal() {
    const modal = await this.modalController.create({
      component: LoginModalComponent,
      cssClass: 'modal--small',
    });
    modal.present();
  }

  openChat() {
    this.router.navigate(['chat']);
  }

  navigateTo(routing: string) {
    this.router.navigate([routing]);
  }
}
