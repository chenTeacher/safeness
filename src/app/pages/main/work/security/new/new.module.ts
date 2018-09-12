import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import {PipesModule} from "../../../../../pipes/pipes.module";
import {NewPage} from "./new";




@NgModule({
  declarations: [
    NewPage,
  ],
  imports: [
    IonicPageModule.forChild(NewPage),
    PipesModule
  ],
})
export class NewModule {}
