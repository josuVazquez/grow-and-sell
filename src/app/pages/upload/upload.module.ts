import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadPageRoutingModule } from './upload-routing.module';

import { TranslateModule } from '@ngx-translate/core';
import { UploadPage } from './upload.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    ComponentsModule
  ],
  declarations: [UploadPage],
  providers: [CurrencyPipe]
})
export class UploadPageModule {}
