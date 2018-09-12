import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the WorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'new'
})
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
  public listdata: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getData();
  }


getData() {
    this.listdata = [
      {'name': '玉溪项目部', 'type': '周检查', 'time': '2018-07-10'},
      {'name': '玉溪项目部', 'type': '(项目层级)日常检查', 'time': '2018-06-19'},
      {'name': '玉溪项目部', 'type': '周检查', 'time': '2018-06-14'},
      {'name': '玉溪项目部', 'type': '(项目层级)日常检查', 'time': '2018-06-02'},
      {'name': '玉溪项目部', 'type': '周检查', 'time': '2018-06-01'},
      {'name': '玉溪项目部', 'type': '周检查', 'time': '2018-05-31'},
      {'name': '玉溪项目部', 'type': '周检查', 'time': '2018-05-11'},
      {'name': '玉溪项目部', 'type': '周检查', 'time': '2018-03-16'},
    ]
  }

  /**
   * 刷新
   * @param $event
   */
  doRefresh($event) {
    console.log('Begin async operation', $event);
    setTimeout(() => {
      console.log('Async operation has ended');
      $event.complete();
    }, 2000);
  }

  /**
   * 隐患登记
   * @param type 登记类型
   */
  addInspect(type) {
    switch (type){
      case 'daily':
        this.navCtrl.push('new-daily-check',{name:''});
        break;
      // case 'special':
      //   this.navCtrl.push('new-specialy-check',{name:''});
      //   break;
      // case 'week':
      //   this.navCtrl.push('new-week-check',{name:''});
      //   break;
      // case 'other':
      //   this.navCtrl.push('new-other-check',{name:''});
      //   break;
    }

  }

  /**
   * 检查详情
   */
  inspectInfo(item) {
  }
}
