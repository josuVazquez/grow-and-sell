import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { InputComponentModule } from '../input/input.module';

@NgModule({
  declarations: [LoginModalComponent],
  imports: [
    IonicModule,
    BrowserModule,
    InputComponentModule,
    AppRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  exports: [LoginModalComponent],
})
export class LoginModalComponent {}
