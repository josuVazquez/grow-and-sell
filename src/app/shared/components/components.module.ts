import { NgModule } from '@angular/core';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input/input.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { CurrencyDropDownComponent } from './currency-drop-down/currency-drop-down.component';

const components = [InputComponent, LoginModalComponent, CurrencyDropDownComponent];
@NgModule({
  declarations: [...components],
  imports: [
    IonicModule,
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  exports: [...components],
})
export class ComponentsModule {}
