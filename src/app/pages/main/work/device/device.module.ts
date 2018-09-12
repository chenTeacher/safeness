import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {DevicePage} from "./device";


@NgModule({
  declarations: [
    DevicePage,
  ],
  imports: [
    IonicPageModule.forChild(DevicePage),
  ],
  providers: []
})
export class DeviceModule {
}
