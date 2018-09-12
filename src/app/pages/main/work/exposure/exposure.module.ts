import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {DatePipe} from "@angular/common";
import {ExposurePage} from "./exposure";
import {SuperTabsModule} from "ionic2-super-tabs";


@NgModule({
  declarations: [
    ExposurePage,
  ],
  imports: [
    IonicPageModule.forChild(ExposurePage),
    SuperTabsModule.forRoot()
  ],
  providers: [
    DatePipe,
  ],
})
export class ExposureModule {
}
