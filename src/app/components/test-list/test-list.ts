import { Component,Input,Output,EventEmitter} from '@angular/core';
import { ToastController }from'ionic-angular';
/**
 * Generated class for the TestListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'test-list',
  templateUrl: 'test-list.html'
})
export class TestListComponent {
  @Input("items") items:Array<any>;
  @Output("text") everySecond = new EventEmitter();
  constructor(public toastCtrl:ToastController) {
    console.log('Hello TestListComponent Component');
  }
  itemSelected(){
    const toast = this.toastCtrl.create({
      message: '这是一个最好的时代，这是一个最坏的时代;这是一个智慧的年代，这是一个愚蠢的年代;这是一个信仰的时期，这是一个怀疑的时期;这是一个光明的季节，这是一个黑暗的季节； 这是希望之春，这是失望之冬；人们面前应有尽有，人们面前一无所有；人们正踏上天堂之路，人们正走向地狱之门。——狄更斯 《双城记》',
      duration: 3000,
      position:'middle',
      showCloseButton:true,
      closeButtonText:'关闭',
      dismissOnPageChange:true
    });
    toast.present();
    this.everySecond.emit("我们一起学猫叫，一起喵喵喵");
  }
   //下拉刷新
 doRefresh(refresher) {
  console.log('Begin async operation', refresher);
  //加入请求
  // this.appserve.httpGet(appg.ListPage,params,callback).then(res=>)
  setTimeout(() => {
    console.log('Async operation has ended');

    refresher.complete();
  }, 2000);
}
//上拉加载更多
doInfinite(infiniteScroll) {
  console.log('Begin async operation');
  //加入请求
  setTimeout(() => {
    console.log('Async operation has ended');
    infiniteScroll.complete();
  }, 500);
}
}
