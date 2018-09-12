/**
 * Created by ChenTeacher on 2018-07-12.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {PipesModule} from "../../../../../pipes/pipes.module";
import {NewDailyCheckPage} from "./new-daily-check";



@NgModule({
  declarations: [
    NewDailyCheckPage ,
  ],
  imports: [
    IonicPageModule.forChild(NewDailyCheckPage),
    PipesModule
  ],
})
export class NewDailyCheckPageModule {}
