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
  name: 'plan'
})
@Component({
  selector: 'page-plan',
  templateUrl: 'plan.html',
})
export class PlanPage {
  public typeList: Type[] = [
    {value: '1', name: '玉溪项目部'},
  ];
  public types: Type[];
  /*整改开始时间*/
  public st: string = this.datePipe.transform(new Date().setDate(new Date().getDate() - 5), 'yyyy-MM-dd');
  /*整改结束时间*/
  public et: string = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  /*数据*/
  public listdata: any[];

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
