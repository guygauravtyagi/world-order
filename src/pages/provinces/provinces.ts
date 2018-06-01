import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GlobalProvider } from '../../providers/global/global';

import { BuildPage } from '../../pages/build/build';

@Component({
  selector: 'page-provinces',
  templateUrl: 'provinces.html',
})
export class ProvincesPage {
  provincesObj: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private globalService: GlobalProvider) {
    this.provincesObj = this.globalService.getGameObject().provinces;
  }

  tileClicked (param) {
    this.navCtrl.setRoot(BuildPage, {id:param.id,page:'province'});
  };

}
