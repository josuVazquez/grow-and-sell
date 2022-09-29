import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    IonicModule,
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
