import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {AuthorityServiec} from '../../../providers/authority/authority.serviec';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  providers:[AuthorityServiec],
})
export class HomePageModule {}
