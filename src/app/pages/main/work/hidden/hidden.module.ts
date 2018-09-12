import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {HiddenPage} from "./hidden";


@NgModule({
  declarations: [
    HiddenPage,
  ],
  imports: [
    IonicPageModule.forChild(HiddenPage),
  ],
})
export class HiddenModule {}
