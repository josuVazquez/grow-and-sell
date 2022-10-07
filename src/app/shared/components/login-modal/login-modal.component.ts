import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }

  loginGoogle() {
    this.firebaseService.GoogleAuth();
    this.close();
  }
}
