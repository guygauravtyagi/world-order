import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TileComponent } from './tile/tile';
import { InfoPopupComponent } from './info-popup/info-popup';

import { ListPopupComponent } from './list-popup/list-popup';
import { DecisivePopupComponent } from './decisive-popup/decisive-popup';
@NgModule({
	declarations: [TileComponent,
    InfoPopupComponent,
    ListPopupComponent,
    DecisivePopupComponent],
	imports: [
    	IonicModule
	],
	exports: [TileComponent,
    InfoPopupComponent,
    ListPopupComponent,
    DecisivePopupComponent]
})
export class ComponentsModule {}
