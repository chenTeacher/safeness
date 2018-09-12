import {IonicPage, NavController, NavParams} from "ionic-angular";
import {Component} from "@angular/core";

/**
 * Created by ChenTeacher on 2018-07-12.
 */

@IonicPage({
  name: 'new-daily-check'
})
@Component({
  selector: 'page-new-daily-check',
  templateUrl: './new-daily-check.html',
})
export class NewDailyCheckPage {
  /*检查记录*/
  public record = false;
  public recordList = [{'name': 'record'}];
  /*生成的通知单*/
  public notice = false;
  public noticeList = [{'name': 'notice'}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  };

  ionViewDidLoad() {

  }

  doRefresh($event) {
    console.log('Begin async operation', $event);
    setTimeout(() => {
      console.log('Async operation has ended');
      $event.complete();
    }, 2000);
  }

  /**
   * 隐患登记
   */
  register() {
    this.navCtrl.push('registration');
  }

  /**
   * 是否显示检查记录
   */
  showRecord(record) {
    console.info(record);
    this.record = record;
  }

  /**
   * 是否显示生成的通知单
   */
  showNotice(notice) {
    console.info(notice);
    this.notice = notice;
  }
}
