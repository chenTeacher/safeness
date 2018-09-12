import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DatePipe} from '@angular/common';

/**
 * Generated class for the WorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'danger'
})
@Component({
  selector: 'page-danger',
  templateUrl: 'danger.html',
})
export class DangerPage {
  public typeList: Type[] = [
    {value: '1', name: '全部'},
    {value: '2', name: '动火作业'},
    {value: '3', name: '安全防护设施拆除'},
    {value: '4', name: '施工现场危险1作业'},
  ];
  public type: Type = this.typeList[0];
  /*整改开始时间*/
  public st: string = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  /*整改结束时间*/
  public et: string;
  /*数据*/
  public listdata:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public datePipe: DatePipe) {

  }

  /**
   * 下拉刷新
   * @param $event
   */
  public doRefresh($event) {
    console.log('Begin async operation', $event);

    setTimeout(() => {
      console.log('Async operation has ended');
      $event.complete();
    }, 2000);
  }
}
