import { Component } from '@angular/core';
import { IonicPage, NavController ,NavParams} from 'ionic-angular';

/**
 * Generated class for the MainPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"main"
})
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  public data:any;
  homeRoot = 'home'
  workRoot = 'work'
  manageRoot = 'manage'
  personRoot = 'person'
  constructor(public navCtrl: NavController, public navParams: NavParams ) {
    this.data =this.navParams.data;
  }

}
