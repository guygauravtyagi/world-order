import { NgModule } from '@angular/core';
import { TileComponent } from './tile/tile';
import { InfoPopupComponent } from './info-popup/info-popup';

import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [TileComponent,
    InfoPopupComponent],
	imports: [
    	IonicModule
	],
	exports: [TileComponent,
    InfoPopupComponent]
})
export class ComponentsModule {}
