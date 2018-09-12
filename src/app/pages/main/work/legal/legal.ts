import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the WorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'legal'
})
@Component({
  selector: 'page-legal',
  templateUrl: 'legal.html',
})
export class LegalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  doRefresh($event) {
    console.log('Begin async operation', $event);
    setTimeout(() => {
      console.log('Async operation has ended');
      $event.complete();
    }, 2000);
  }
}
