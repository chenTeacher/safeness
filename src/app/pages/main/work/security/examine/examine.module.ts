/**
 * Created by ChenTeacher on 2018-07-12.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ExaminePage} from "./examine";
import {PipesModule} from "../../../../../pipes/pipes.module";


@NgModule({
  declarations: [
    ExaminePage ,
  ],
  imports: [
    IonicPageModule.forChild(ExaminePage),
    PipesModule
  ],
})
export class ExamineModule {}
