import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {Page2} from "./page2";
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    Page2,
  ],
  imports: [
    IonicPageModule.forChild(Page2),
  ],
  providers: [
    DatePipe,
  ]
})
export class Page2Module {}
