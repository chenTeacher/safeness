/**
 * 这个类封装的是插件的工具类
 */
import { Injectable } from '@angular/core';
import { ToastController,LoadingController,Loading } from 'ionic-angular';
import { IS_DEBUG } from './Constants';
@Injectable()
export class NativeService {
  private loading: Loading;
  constructor(public toastCtrl:ToastController,public loadingCtrl:LoadingController){}
  //对错误信息的提示工具以toast的形式展现
  handleError(error:Response | any) {
    let msg = '';
    if (error.status == 400) {
      msg = '请求无效(code：400)';
      console.log('请检查参数类型是否匹配');
    } else if (error.status == 404) {
      msg = '请求资源不存在(code：404)';
      console.error(msg + '，请检查路径是否正确');
    } else if (error.status == 500) {
      msg = '服务器发生错误(code：500)';
      console.error(msg + '，请检查路径是否正确');
    } else {
      msg = '发生错误(code：' + error.status + ')';
      console.error(msg + '，请检查路径是否正确');
    }
    IS_DEBUG && console.error(error);
    if (msg != '') {
      this.toast(msg);
    }
  }
  toast(message, callback?) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      dismissOnPageChange: true,
    });
    toast.present();
    if (callback) {
      callback();
    }
  }
  /**
   * 统一调用此方法显示loading
   * @param content 显示的内容
   */
  showLoading(content = ''): void {
    if (!this.loading) {// 如果loading已经存在则不再打开
      const loading = this.loadingCtrl.create({
        content
      });
      loading.present();
      this.loading = loading;
    }
  }

  /**
   * 关闭loading
   */
  hideLoading(): void {
    this.loading && this.loading.dismiss();
    this.loading = null;
  }



}
