// 根木模块    告诉ionic  如何组装应用
import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MyApp} from './app.component';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';


import {JPush} from '@jiguang-ionic/jpush';
import {HttpService} from "./providers/HttpService";
import {NativeService} from "./providers/NativeService";
import {GlobalData} from "./providers/GlobalData";
import {HttpServiceInterceptor} from "./providers/HttpService.interceptor";
import {Camera} from '@ionic-native/camera';

@NgModule({
  //声明组件
  declarations: [
    MyApp
  ],
  //依赖的模块
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',
      backButtonText: '',
      tabsHideOnSubPages: 'true',
    }),
  ],
  bootstrap: [IonicApp],//启动的模块
  entryComponents: [//配置的不会再模板中使用的组件
    MyApp
  ],
  providers: [//配置服务
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JPush,
    HttpService,
    NativeService,
    GlobalData,
    {provide: HTTP_INTERCEPTORS, useClass: HttpServiceInterceptor, multi: true}
  ]
})
export class AppModule {
}
