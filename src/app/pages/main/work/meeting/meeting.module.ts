import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {DatePipe} from "@angular/common";
import {MeetingPage} from "./meeting";


@NgModule({
  declarations: [
    MeetingPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingPage),
  ],
  providers: [
    DatePipe,
  ]
})
export class MeetingModule {
}
