import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public dialog: AlertController) { }

  error(message: string) {
    this.dialog.create({
      header: 'Error',
      message
  });
  }

  info(message: string) {
    this.dialog.create({
      header: 'Info',
      message
    });
  }
}
