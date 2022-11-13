import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  loading: HTMLIonLoadingElement;
  constructor(private loadingCtrl: LoadingController) { 
  }

  async open() {
    if(this.loading) {
      return;
    }
    this.loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 3000,
      spinner: 'circles',
    });

    this.loading.present();
  }

  close() {
    if(!this.loading) {
      return;
    }
    this.loading.dismiss();
    this.loading = null;
  }
}
