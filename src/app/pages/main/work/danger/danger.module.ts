import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {DangerPage} from "./danger";
import {DatePipe} from "@angular/common";


@NgModule({
  declarations: [
    DangerPage,
  ],
  imports: [
    IonicPageModule.forChild(DangerPage),
  ],
  providers: [
    DatePipe,
  ]
})
export class DangerModule {
}
