import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadPageRoutingModule } from './upload-routing.module';

import { TranslateModule } from '@ngx-translate/core';
import { UploadPage } from './upload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadPageRoutingModule,
    TranslateModule,
  ],
  declarations: [UploadPage],
})
export class UploadPageModule {}
