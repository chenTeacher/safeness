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
  name: 'construction'
})
@Component({
  selector: 'page-construction',
  templateUrl: 'construction.html',
})
export class ConstructionPage {
  /*所属单位*/
  public typeList: Type[] = [
    {value: '1', name: '玉溪项目部'},
  ];
  /*所属区域*/
  public partsList: Type[] = [
    {value: '1', name: '全部'},
    {value: '2', name: '1栋号'},
    {value: '3', name: '2栋号'},
  ];
  public parts: Type;
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
