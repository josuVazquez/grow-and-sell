import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesPageRoutingModule } from './favorites-routing.module';

import { FavoritesPage } from './favorites.page';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '@components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesPageRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  declarations: [FavoritesPage],
})
export class FavoritesPageModule {}
