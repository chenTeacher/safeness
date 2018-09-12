import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the WorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'security'
})
@Component({
  selector: 'page-security',
  templateUrl: 'security.html',
})
export class SecurityCheckPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('ionViewDidLoad SecurityCheckPage' + this.navParams.get("id"));

  }

  /**
   * 选择功能
   * @param type
   */
  public choose(type) {
    switch (type) {
      //新增安全检查
      case 'new':
        this.navCtrl.push('new');
        break;
      //安全检查台账
      case 'ledger':
        this.navCtrl.push('ledger');
        break;
      //需要执行的安全检查
      case 'execute':
        this.navCtrl.push('execute');
        break;
      //检查计划审批
      case 'examine':
        this.navCtrl.push('examine');
        break;
    }
  }

}
