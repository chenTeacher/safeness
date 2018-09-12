import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AuthorityServiec} from "../../../providers/authority/authority.serviec";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public badge: number = 1;
  // 用户权限
  public level1: string = '1';
  public level2: string = '1001';
  //安全指标分类数据
  public saftcode: Array<any> = [];
  //工作提醒
  public workremind: Array<any> = [];
  //项目风险预警
  public riskwarning: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public authority: AuthorityServiec) {
    this.level1 = this.navParams.get('level1');
    this.level2 = this.navParams.get('level2');
  }

  ionViewDidLoad() {

    this.saftcode = this.authority.getSaftCode(this.level1, this.level2);
    console.info(this.saftcode);
    this.workremind = this.authority.getWorkRemind(this.level1, this.level2);
    console.info(this.workremind);
    this.riskwarning = this.authority.getRiskWarning(this.level1, this.level2);
    console.info(this.riskwarning);
  }

  doRefresh($event) {
    console.log('Begin async operation', $event);

    setTimeout(() => {
      console.log('Async operation has ended');
      $event.complete();
    }, 2000);
  }
}
