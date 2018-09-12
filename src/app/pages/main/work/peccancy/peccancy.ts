import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the WorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'peccancy'
})
@Component({
  selector: 'page-peccancy',
  templateUrl: 'peccancy.html',
})
export class PeccancyPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /**
   * 选择功能
   * @param type
   */
  public choose(type) {
    switch (type) {

    }
  }

}
