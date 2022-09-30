import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [
    IonicModule,
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  exports: [InputComponent],
})
export class InputComponentModule {}
