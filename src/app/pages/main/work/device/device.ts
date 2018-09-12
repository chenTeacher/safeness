import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the WorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'device'
})
@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
})
export class DevicePage {
  listdata: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getData();
  }

  getData() {
    this.listdata = [
      {'name': '塔式起重机'},
    ]
  }
}
