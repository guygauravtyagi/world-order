import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { App } from 'ionic-angular';


import { ProvincesPage } from '../../pages/provinces/provinces';

@Injectable()
export class CommonMethodsProvider {

  constructor(public http: HttpClient, public app: App) {

  }
  
  goBack (previousPage) {
    let nav = this.app.getActiveNav();
    switch (previousPage) {
      case 'province':
        nav.setRoot(ProvincesPage);
        break;
    
      default:
        break;
    }
  };

  incrementHouse (province, typeStr, houseObj, gameObj) {
    let flagAdd = true;
    if (province.buildings[typeStr]) {
      province.buildings[typeStr].forEach(element => {
        if (element.houseObj.name === houseObj.name) {
          element.count ++;
          flagAdd = false;
        }
      });
    }
    if (flagAdd) {
      province.buildings[typeStr].push({
        houseObj:houseObj,
        count:1
      });
    }
    province.populationLimit += houseObj.populationLimit;
    province.pollution += houseObj.pollution
    province.happiness += houseObj.happiness
    province.area -= houseObj.area;
    province.worth += (houseObj.cost + (houseObj.cost/gameObj.worther));
  };

}
