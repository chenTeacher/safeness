import {ActionSheetController, IonicPage, NavController, NavParams, ToastController} from "ionic-angular";
import {Component} from "@angular/core";
import {Camera, CameraOptions} from '@ionic-native/camera';
import {BaseUI} from "../../../../common/baseui";
import {DatePipe} from "@angular/common";

/**
 * Created by ChenTeacher on 2018-07-12.
 */

@IonicPage({
  name: 'registration'
})
@Component({
  selector: 'page-registration',
  templateUrl: './registration.html',
})
export class RegistrationPage extends BaseUI {
  /*隐患类别*/
  public typeList: Type[] = [
    {value: '1', name: '安全管理'},
    {value: '2', name: '文明施工'},
    {value: '3', name: '脚手架'},
    {value: '4', name: '基坑工程'},
    {value: '5', name: '模板支架'},
    {value: '6', name: '高处作业'},
    {value: '7', name: '施工用电'},
    {value: '8', name: '物料提升机与施工升降机'},
    {value: '9', name: '塔式起重机与起重吊机'},
    {value: '10', name: '施工机具'},
  ];
  public type: Type = this.typeList[0];
  /*隐患级别*/
  public levelList: Type[] = [
    {value: '1', name: '一般隐患'},
    {value: '2', name: '重大隐患'},
  ];
  public level: Type = this.levelList[0];
  /*隐患部位*/
  public partsList: Parts[] = [
    {value: '1', name: '无', person: ''},
    {value: '2', name: '1栋号', person: '施工员1'},
    {value: '3', name: '2栋号', person: '施工员2'},
  ];
  public parts: Parts = {value: '', name: '', person: ''};
  /*整改单位*/
  public companyList: Company[] = [
    {value: '1', name: '巨强', person: '杨志'},
    {value: '2', name: '劳务公司', person: '秦叔宝'},
  ];
  public company: Company = {value: '', name: '', person: ''};
  /*整改班组*/
  public groupList: Company[] = [];
  public group: Company = {value: '', name: '', person: ''};
  /*整改开始时间*/
  public st: string = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  /*整改结束时间*/
  public et: string;
  /*整改前照片*/
  public image: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController,
              public toastCtrl: ToastController,
              public datePipe: DatePipe,
              public camera: Camera) {
    super();
  };

  ionViewDidLoad() {

  }

  /*选择输入菜单*/
  public describeActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: '方式',
      buttons: [
        {
          text: '手动输入',
          handler: () => {
            console.log('手动输入');
          }
        },
        {
          text: '隐患排查标准',
          handler: () => {
            console.log('隐患排查标准');
          }
        }, {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('取消');
          }
        }
      ]
    });
    actionSheet.present();
  }

  /*选择照片方式*/
  public photoActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: '拍照',
          handler: () => {
            console.log('拍照');
            this.getPhoto();
          }
        },
        {
          text: '相册',
          handler: () => {
            console.log('相册');
            this.getImage();
          }
        }, {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('取消');
          }
        }
      ]
    });
    actionSheet.present();
  }

  /*保存数据*/
  public save() {

  }

  //相册获取照片
  getImage() {
    //CameraOptions获取本地图片的加载特别的慢 不知道原因
    const options: CameraOptions = {
      quality: 100,//图片的质量 默认50；
      destinationType: this.camera.DestinationType.NATIVE_URI,//返回值的格式 DATA_URL 图像为Base64编码字符串,FILE_URI 返回图像文件URI,NATIVE_URI 返回图像原生URI;默认是FILE_URI
      encodingType: this.camera.EncodingType.PNG,//图片的编码格式 JPEG PNG
      mediaType: this.camera.MediaType.PICTURE,//多媒体类型 VIDEO PICTURE WILL ALWAYS RETURN FILE_URI ALLMEDIA
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,//设置图片的来源 默认是相机。CAMERA相机，SAVEDPHOTOALBUM 保存相册
      // allowEdit:true, //是否允许简单的编辑
      // targetWidth:100 // 像素设置
      // targetHeight：100 // 像素设置
      // correctOrientation:false,//在捕获过程中旋转图像以校正设备的方向。
      // saveToPhotoAlbum:false,//是否保存在本地
      // cameraDirection:this.camera.Direction.BACK //选择相机使用（正面或背面）
      // popoverOptions:cameraPopoverOptions//iOS唯一选项，指定iPad中的弹出位置。CameraPopoverOptions定义。
    };
    this.camera.getPicture(options).then((imageData) => {
      // imageData 要么是BASE64编码的字符串，要么是文件URI
      console.log(this.image);
      this.image = imageData;
      console.log(this.image);
      // 如果是Base64：
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      // this.image = base64Image;
    }, (err) => {
      // Handle error
      super.showToast(this.toastCtrl, "获取照片失败");
      console.error(err);
    });
  }

  //拍照获取图片
  getPhoto() {
    const options: CameraOptions = {
      quality: 100,//图片的质量 默认50；
      destinationType: this.camera.DestinationType.NATIVE_URI,//返回值的格式 DATA_URL 图像为Base64编码字符串,FILE_URI 返回图像文件URI,NATIVE_URI 返回图像原生URI;默认是FILE_URI
      encodingType: this.camera.EncodingType.PNG,//图片的编码格式 JPEG PNG
      mediaType: this.camera.MediaType.PICTURE,//多媒体类型 VIDEO PICTURE WILL ALWAYS RETURN FILE_URI ALLMEDIA
      sourceType: this.camera.PictureSourceType.CAMERA,//设置图片的来源 默认是相机。CAMERA相机，SAVEDPHOTOALBUM 保存相册
      // allowEdit:true, //是否允许简单的编辑 这个功能有问题
      // targetWidth:100 // 像素设置
      // targetHeight：100 // 像素设置
      correctOrientation: false,//在捕获过程中旋转图像以校正设备的方向。
      saveToPhotoAlbum: true,//是否保存在本地
      // cameraDirection:this.camera.Direction.BACK //选择相机使用（正面或背面）
      // popoverOptions:cameraPopoverOptions//iOS唯一选项，指定iPad中的弹出位置。CameraPopoverOptions定义。
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData 要么是BASE64编码的字符串，要么是文件URI
      this.image = imageData;
      // 如果是Base64：
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      // this.image = base64Image;
    }, (err) => {
      // Handle error
      super.showToast(this.toastCtrl, "获取照片失败");
      console.error(err);
    });
  }

  /*下拉刷新*/
  doRefresh($event) {
    console.log('Begin async operation', $event);
    setTimeout(() => {
      console.log('Async operation has ended');
      $event.complete();
    }, 2000);
  }

}




