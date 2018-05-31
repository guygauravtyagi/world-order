import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GlobalProvider } from '../../providers/global/global';
import { CommonMethodsProvider } from '../../providers/common-methods/common-methods';

//import { ProvincesPage } from '../provinces/provinces';

@IonicPage()
@Component({
  selector: 'page-build',
  templateUrl: 'build.html',
})
export class BuildPage {
  gameObj: any;
  province: any;
  id: Number;
  houseList: any;
  openHousingList:boolean = false;
  openConstruction:boolean = false;
  previousPage:String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private globalService: GlobalProvider, private common:CommonMethodsProvider) {
    this.globalService.getBuildHouseDummy().subscribe(data => this.buildHouseHelper(data), error => console.log(error));
    this.id = navParams.get('id');
    this.previousPage =  navParams.get('page');
    this.gameObj = this.globalService.getGameObject();
    this.gameObj.provinces.forEach(element => {
      if (element.id === this.id) {
        this.province = element;
      }
    });
  }

  buildHouseHelper(info) {
    this.houseList = info;
  }

  buildFacility(type) {
    switch (type) {
      case 'resident':
        this.openConstruction = true;
        this.openHousingList = true;
        break;
      case 'commercial':

        break;
      case 'research':

        break;
      default:
        break;
    }
  };

  closeConstruction () {
    this.openConstruction = false;
  };

  houseClicked (house) {

  };

  goBack () {
    this.common.goBack(this.previousPage);
  };
}
