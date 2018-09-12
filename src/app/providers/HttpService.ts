/**
 * Created by yanxiaojun617@163.com on 12-27.
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpObserve } from '@angular/common/http/src/client';
import { IS_DEBUG, APP_SERVE_URL, REQUEST_TIMEOUT } from './Constants';
import { Utils } from './Utils';
import { NativeService } from './NativeService';
import { GlobalData } from './GlobalData';




@Injectable()
export class HttpService {
  constructor(public http:HttpClient,
              public nativeService:NativeService,
              public globalData:GlobalData,
            ){}
  /**
   * 一个普通的get请求
   * @param url 请求的地址
   * @param paramMap 请求的参数
   * @param useDefaultApi 当useDefaultApi ==false 时将带有一个loading 等待界面。useDefaultApi == true 则没有。
   */
  public get(url: string, paramMap: any = null, useDefaultApi = true): Observable<any> {
    const options = {
      params:paramMap
    };
    return useDefaultApi ? this.defaultRequest("GET",url, options) : this.request("GET",url, options);
  }
  /**
   * 一个普通的post请求
   * @param url 请求的地址
   * @param paramMap 请求的参数
   * @param useDefaultApi  当useDefaultApi ==false 时将带有一个loading 等待界面。useDefaultApi == true 则没有。
   */
  public post(url: string, paramMap: any = null, useDefaultApi = true): Observable<any>{
    const data = new HttpParams({fromObject:paramMap});
    const options = {
      body:data,
      headers:new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      })
    };
    return useDefaultApi ? this.defaultRequest("POST",url, options) : this.request("POST",url, options);
  }
  /**
   * 这是一个标准的请求方式
   */
  public defaultRequest(method:string,url: string, options:{
    body?: any;
    headers?: HttpHeaders | {[header: string]: string | string[];};
    observe?: HttpObserve;
    params?: HttpParams | {[param: string]: string | string[];};
    reportProgress?: boolean;
    responseType?:"json" | "arraybuffer" | "blob" | "text";
    withCredentials?: boolean;
  }): Observable<any> {
    url = Utils.formatUrl(url.startsWith('http') ? url : APP_SERVE_URL + url);
    return Observable.create(observer => {
      this.http.request(method,url,options).subscribe(res => {
        try {
          observer.next(res.json());
        } catch (e) {
          observer.next(res);
        }
      }, err => {
        // this.nativeService.handleError(err);
          observer.error(err);
      });
    });
  }

  public request(method:string,url: string, options:{
    body?: any;
    headers?: HttpHeaders | {[header: string]: string | string[];};
    observe?: HttpObserve;
    params?: HttpParams | {[param: string]: string | string[];};
    reportProgress?: boolean;
    responseType?:"json" | "arraybuffer" | "blob" | "text";
    withCredentials?: boolean;
  }): Observable<any> {
    IS_DEBUG && console.log('%c 请求发送前 %c', 'color:blue', '', 'url', url, 'options', options);
    this.showLoading();
    url = Utils.formatUrl(url.startsWith('http') ? url : APP_SERVE_URL + url);
    return Observable.create(observer => {
      this.http.request(method,url, options).timeout(REQUEST_TIMEOUT).subscribe(res => {
        try {
          observer.next(res.json());
        } catch (e) {
          observer.next(res);
        }
        IS_DEBUG && console.log('%c 请求发送成功 %c', 'color:green', '', 'url', url, 'options', options, 'res', res);
        this.hideLoading();
      }, err => {
        this.hideLoading();
        // this.nativeService.handleError(err);
        IS_DEBUG && console.log('%c 请求发送失败 %c', 'color:red', '', 'url', url, 'options', options, 'err', err);
        observer.error(err);
      });
    });
  }
  private count = 0; //  记录未完成的请求数量,当请求数为0关闭loading,当不为0显示loading

  private showLoading() {
    if (++this.count > 0) {// 一旦有请求就弹出loading
      this.globalData.showLoading && this.nativeService.showLoading();
    }
  }

  private hideLoading() {
    if (this.globalData.showLoading) {
      // 延迟处理可以避免嵌套请求关闭了第一个loading,突然后弹出第二个loading情况(结合nativeService.showLoading())
      setTimeout(() => {
        if (--this.count === 0) {// 当正在请求数为0,关闭loading
          this.nativeService.hideLoading();
        }
      }, 200);
    } else {
      this.globalData.showLoading = true;
    }
  }
}
