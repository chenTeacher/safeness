import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QRScanner} from "@ionic-native/qr-scanner";

/**
 * Generated class for the ManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'manage'
})
@Component({
  selector: 'page-manage',
  templateUrl: 'manage.html',
})
export class ManagePage {

  workremind: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getWorkRemind();
  }

  /**
   * 工作提醒
   */
  getWorkRemind() {
    this.workremind = [
      {'Icon': './assets/imgs/zximg.png', 'title': '人员信息查询', 'Id': ''},
      {'Icon': './assets/imgs/zximg.png', 'title': '扫一扫', 'Id': '1'},
    ]
  }

}
