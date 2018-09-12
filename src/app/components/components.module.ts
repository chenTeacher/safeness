import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { TestListComponent } from './test-list/test-list';
import { PipesModule } from './../pipes/pipes.module';

@NgModule({
	declarations: [
    TestListComponent
	],
	imports: [
		IonicModule,
		PipesModule

	],
	exports: [
    TestListComponent
	]
})
export class ComponentsModule {}
