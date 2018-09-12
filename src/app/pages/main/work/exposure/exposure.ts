import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';


/**
 * Generated class for the WorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'exposure'
})
@Component({
  selector: 'page-exposure',
  templateUrl: 'exposure.html',
})
export class ExposurePage {
  page1 : string = 'page1'
  page2 : string = 'page2'
  constructor(public navCtrl: NavController) {

  }

}
