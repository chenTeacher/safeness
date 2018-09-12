import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {SecurityCheckPage} from "./security";


@NgModule({
  declarations: [
    SecurityCheckPage,
  ],
  imports: [
    IonicPageModule.forChild(SecurityCheckPage),
  ],
})
export class SecurityCheckModule {}
