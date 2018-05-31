import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuildPage } from './build';

@NgModule({
  declarations: [
    BuildPage,
  ],
  imports: [
    IonicPageModule.forChild(BuildPage),
  ],
})
export class BuildPageModule {}
