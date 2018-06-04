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
        if (element.name === houseObj.name) {
          element.count ++;
          flagAdd = false;
        }
      });
    }
    if (flagAdd) {
      houseObj.count++;
      province.buildings[typeStr].push(houseObj);
    }
    province.populationLimit += houseObj.populationLimit;
    province.pollution += houseObj.pollution
    gameObj.populationLimit += gameObj.populationLimit;
    gameObj.pollution += gameObj.pollution
    province.happiness += houseObj.happiness
    province.area -= houseObj.area;
    province.worth += (houseObj.cost + (houseObj.cost/gameObj.worther));
  };

  decrementHouse (province, typeStr, houseObj, gameObj) {
    let flagRemove = false;
    let index = 0;
    if (province.buildings[typeStr]) {
      for (let i = 0; i < province.buildings[typeStr].length; i++) {
        const element = province.buildings[typeStr][i];
        if (element.name === houseObj.name) {
          element.count --;
          if(element.count === 0) {
            flagRemove = true;
            index = i;
          }
        }
      }
    }
    if (flagRemove) {
      province.buildings[typeStr].splice((index),1);
      province.populationLimit -= houseObj.populationLimit;
      province.pollution -= houseObj.pollution
      gameObj.populationLimit -= gameObj.populationLimit;
      gameObj.pollution -= gameObj.pollution
      province.happiness -= houseObj.happiness
      province.area += houseObj.area;
      province.worth -= (houseObj.cost + (houseObj.cost/gameObj.worther));
    }
  };

}
