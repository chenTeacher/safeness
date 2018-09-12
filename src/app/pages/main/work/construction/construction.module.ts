import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {DatePipe} from "@angular/common";
import {ConstructionPage} from "./construction";


@NgModule({
  declarations: [
    ConstructionPage,
  ],
  imports: [
    IonicPageModule.forChild(ConstructionPage),
  ],
  providers: [
    DatePipe,
  ]
})
export class ConstructionModule {
}
