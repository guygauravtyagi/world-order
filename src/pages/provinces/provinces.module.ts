import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProvincesPage } from './provinces';

@NgModule({
  declarations: [
    ProvincesPage,
  ],
  imports: [
    IonicPageModule.forChild(ProvincesPage),
  ],
})
export class ProvincesPageModule {}
