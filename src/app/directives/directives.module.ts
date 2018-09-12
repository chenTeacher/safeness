import { NgModule } from '@angular/core';
import { MycolorDirective } from './mycolor/mycolor';
import { AddelementDirective } from './addelement/addelement';
@NgModule({
	declarations: [
    MycolorDirective,
    AddelementDirective],
	imports: [],
	exports: [
    MycolorDirective,
    AddelementDirective]
})
export class DirectivesModule {}
