import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input/input.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { CurrencyDropDownComponent } from './currency-drop-down/currency-drop-down.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

const components = [
  InputComponent,
  LoginModalComponent,
  CurrencyDropDownComponent,
  CardComponent,
];
@NgModule({
  declarations: [...components],
  imports: [
    IonicModule,
    CommonModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  exports: [...components],
})
export class ComponentsModule {}
