import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {DatePipe} from "@angular/common";
import {PlanPage} from "./plan";


@NgModule({
  declarations: [
    PlanPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanPage),
  ],
  providers: [
    DatePipe,
  ]
})
export class PlanModule {
}
