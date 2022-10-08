import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input/input.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { CurrencyDropDownComponent } from './currency-drop-down/currency-drop-down.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';
import { ChangeLocationComponent } from './change-location/change-location.component';
import { UpdaterPhotoComponent } from './updater-photo/updater-photo.component';
import { TemplatePhotoComponent } from './template-photo/template-photo.component';

const components = [
  InputComponent,
  LoginModalComponent,
  CurrencyDropDownComponent,
  CardComponent,
  MapComponent,
  ChangeLocationComponent,
  UpdaterPhotoComponent,
  TemplatePhotoComponent,
];
@NgModule({
  declarations: [...components],
  imports: [
    GoogleMapsModule,
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  exports: [...components],
  providers: [CurrencyPipe],
})
export class ComponentsModule {}
