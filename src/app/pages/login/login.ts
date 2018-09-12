import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage({
  name: 'login',
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user ={
    userCode:"",
    password:""
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
    if(this.user.userCode === '1'){
      this.navCtrl.push('main',{level1:'1',level2:'1001'});
    }
    if(this.user.userCode === '2'){
      this.navCtrl.push('main',{level1:'2',level2:''});
    }
    if(this.user.userCode === '3'){
      this.navCtrl.push('main',{level1:'3',level2:'3001'});
    }
    if(this.user.userCode === '4'){
      this.navCtrl.push('main',{level1:'4',level2:'4005'});
    }

  }
}
