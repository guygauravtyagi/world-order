import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { BuildPage } from './build';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    BuildPage,
  ],
  imports: [
    IonicPageModule.forChild(BuildPage),
    PipesModule,
  ],
})
export class BuildPageModule {}
