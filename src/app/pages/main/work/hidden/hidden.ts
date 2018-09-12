import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the WorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'hidden'
})
@Component({
  selector: 'page-hidden',
  templateUrl: 'hidden.html',
})
export class HiddenPage {
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
