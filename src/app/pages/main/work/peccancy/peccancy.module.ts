import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PeccancyPage} from "./peccancy";


@NgModule({
  declarations: [
    PeccancyPage,
  ],
  imports: [
    IonicPageModule.forChild(PeccancyPage),
  ],
  providers: [
  ]
})
export class PeccancyModule {
}
