import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'work'
})
@Component({
  selector: 'page-work',
  templateUrl: 'work.html',
})
export class WorkPage {
  workremind:Array<any> =[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkPage');
    this.getWorkRemind();
  }
  /**
   * 工作提醒
   */
  getWorkRemind(){
    this.workremind = [
      { 'Icon': './assets/imgs/zximg.png', 'title': '安全检查', 'Id': '0' },
      { 'Icon': './assets/imgs/zximg.png', 'title': '隐患管理', 'Id': '1' },
      { 'Icon': './assets/imgs/zximg.png', 'title': '危险作业管理', 'Id': '2' },
      { 'Icon': './assets/imgs/zximg.png', 'title': '安全曝光台', 'Id': '3' },
      { 'Icon': './assets/imgs/zximg.png', 'title': '违章管理', 'Id': '4' },
      { 'Icon': './assets/imgs/zximg.png', 'title': '设备信息查询', 'Id': '5' },
      { 'Icon': './assets/imgs/zximg.png', 'title': '工作计划', 'Id': '6' },
      { 'Icon': './assets/imgs/zximg.png', 'title': '班组班前会', 'Id': '7' },
      { 'Icon': './assets/imgs/zximg.png', 'title': '施工定位', 'Id': '8' },
      { 'Icon': './assets/imgs/zximg.png', 'title': '法规知识库', 'Id': '9' },
    ]
  }
  goNewPage(item){
    console.info(item.Id);
    switch (item.Id){
      case '0': //安全检查
        this.navCtrl.push('security',{id:'11'});
        break;
      case '1': //隐患管理
        this.navCtrl.push('hidden');
        break;
      case '2': //危险作业管理
        this.navCtrl.push('danger');
        break;
      case '3': //安全曝光台
        this.navCtrl.push('exposure');
        break;
      case '4': //违章管理
        this.navCtrl.push('peccancy');
        break;
      case '5': //设备信息查询
        this.navCtrl.push('device');
        break;
      case '6': //工作计划
        this.navCtrl.push('plan');
        break;
      case '7': //班组班前会
        this.navCtrl.push('meeting');
        break;
      case '8': //施工定位
        this.navCtrl.push('construction');
        break;
      case '9': //法规知识库
        this.navCtrl.push('legal');
        break;
    }

  }
}
