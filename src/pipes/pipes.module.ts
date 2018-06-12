import { NgModule } from '@angular/core';
import { FloorPipe } from './floor/floor';
import { NumberFormatterPipe } from './number-formatter/number-formatter';
@NgModule({
	declarations: [FloorPipe,
    NumberFormatterPipe],
	imports: [],
	exports: [FloorPipe,
    NumberFormatterPipe]
})
export class PipesModule {}
