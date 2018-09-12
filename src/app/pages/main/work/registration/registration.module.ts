/**
 * Created by ChenTeacher on 2018-07-12.
 */
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PipesModule} from "../../../../pipes/pipes.module";
import {RegistrationPage} from "./registration";
import {DatePipe} from "@angular/common";


@NgModule({
  declarations: [
    RegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrationPage),
    PipesModule
  ],
  providers:[
    DatePipe
  ]
})
export class RegistrationPageModule {
}
