import {IonicPage, NavController, NavParams} from "ionic-angular";
import {Component} from "@angular/core";
import {DatePipe} from "@angular/common";

/**
 * Created by ChenTeacher on 2018-07-12.
 */

@IonicPage({
  name: 'ledger'
})
@Component({
  selector: 'page-ledger',
  templateUrl: 'ledger.html',
})
export class LedgerPage {
  inspectTotal: number;//安全检查总次数
  inspectCount: number;//安全检查次数
  listdata: Array<any> = [];
  /*整改单位*/
  public companyList: Company[] = [
    {value: '1', name: '巨强', person: '杨志'},
    {value: '2', name: '劳务公司', person: '秦叔宝'},
  ];
  public company: Company = {value: '', name: '', person: ''};
  /*整改开始时间*/
  public st: string = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  /*整改结束时间*/
  public et: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public datePipe: DatePipe) {
  };

  ionViewDidLoad() {
    this.getData();
    this.inspectCount = 1;
    this.inspectTotal = 1;
  }

  doRefresh($event) {
    console.log('Begin async operation', $event);
    setTimeout(() => {
      console.log('Async operation has ended');
      $event.complete();
    }, 2000);
  }

  getData() {
    this.listdata = [
      {'name': '玉溪项目部', 'type': '季度检查', 'time': '2018-07-10'},
      {'name': '玉溪项目部', 'type': '季度检查', 'time': '2018-06-19'},
      {'name': '玉溪项目部', 'type': '季度检查', 'time': '2018-06-14'},
      {'name': '玉溪项目部', 'type': '季度检查', 'time': '2018-06-02'},
    ]
  }

  /**
   * 查看详情
   */
  inspectInfo(item) {
  }

}
