/**
 * Created by ChenTeacher on 2018-07-12.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ExecutePage} from "./execute";
import {PipesModule} from "../../../../../pipes/pipes.module";


@NgModule({
  declarations: [
    ExecutePage ,
  ],
  imports: [
    IonicPageModule.forChild(ExecutePage),
    PipesModule
  ],
})
export class ExecuteModule {}
