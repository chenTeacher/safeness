import {IonicPage, NavController, NavParams} from "ionic-angular";
import {Component} from "@angular/core";
/**
 * Created by ChenTeacher on 2018-07-12.
 */

@IonicPage({
  name:'examine'
})
@Component({
  selector: 'page-examine',
  templateUrl: 'examine.html',
})
export class ExaminePage {
  inspectTotal:number;//安全检查总次数
  inspectCount:number;//安全检查次数
  unit:any;
  listdata:Array<any> =[];
  constructor(public navCtrl: NavController, public navParams: NavParams){};

  ionViewDidLoad() {
    this.inspectCount = 1;
    this.inspectTotal = 1;
    this.getData();
  }
  doRefresh($event) {
    console.log('Begin async operation', $event);
    setTimeout(() => {
      console.log('Async operation has ended');
      $event.complete();
    }, 2000);
  }
  getData(){
    this.listdata = [
      { 'name':'玉溪项目部','type':'季度检查','time':'2018-07-10'},
      { 'name':'玉溪项目部','type':'季度检查','time':'2018-06-19'},
      { 'name':'玉溪项目部','type':'季度检查','time':'2018-06-14'},
      { 'name':'玉溪项目部','type':'季度检查','time':'2018-06-02'},
    ]
  }

  /**
   * 查看详情
   */
  inspectInfo(item){}

}
