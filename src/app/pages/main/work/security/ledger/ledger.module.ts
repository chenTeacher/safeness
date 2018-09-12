/**
 * Created by ChenTeacher on 2018-07-12.
 */
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {LedgerPage} from "./ledger";
import {PipesModule} from "../../../../../pipes/pipes.module";
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    LedgerPage,
  ],
  imports: [
    IonicPageModule.forChild(LedgerPage),
    PipesModule
  ],
  providers:[DatePipe]
})
export class LedgerModule {
}
