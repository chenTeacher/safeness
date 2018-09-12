import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {Page1} from "./page1";
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    Page1,
  ],
  imports: [
    IonicPageModule.forChild(Page1),
  ],
  providers: [
    DatePipe,
  ]
})
export class Page1Module {
}
