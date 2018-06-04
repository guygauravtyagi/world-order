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
  pageTittle: String;
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
        this.pageTittle = this.province.name;
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
        this.pageTittle = "Build Residence"
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
    this.hideEveryList();
    this.pageTittle = this.province.name;
  };

  hideEveryList () {
    this.openHousingList = false;
  };

  buildHouse (house) {
    this.common.incrementHouse(this.province, 'residence', house, this.gameObj);
  };

  destroyHouse (house) {
    this.common.decrementHouse(this.province, 'residence', house, this.gameObj);
  };

  goBack () {
    this.common.goBack(this.previousPage);
  };

  destroyAll () {

  };
}
