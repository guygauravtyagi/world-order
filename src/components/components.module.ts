import { NgModule } from '@angular/core';
import { TileComponent } from './tile/tile';
import { InfoPopupComponent } from './info-popup/info-popup';

import { IonicModule } from 'ionic-angular';
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
