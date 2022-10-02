import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input/input.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { CurrencyDropDownComponent } from './currency-drop-down/currency-drop-down.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

const components = [InputComponent, LoginModalComponent, CurrencyDropDownComponent];
@NgModule({
  declarations: [...components],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  exports: [...components],
  providers: [CurrencyPipe]
})
export class ComponentsModule {}
