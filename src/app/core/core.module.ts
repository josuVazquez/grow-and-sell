import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../shared/components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TabsComponent, HeaderComponent],
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule,
    ComponentsModule,
    RouterModule
  ],
  exports: [TabsComponent, HeaderComponent]
})
export class CoreModule { }
