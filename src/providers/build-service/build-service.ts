import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BuildServiceProvider {

  constructor(public http: HttpClient) {

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
    gameObj.populationLimit += gameObj.populationLimit;
    province.pollutionLimit += houseObj.pollutionLimit;
    gameObj.pollutionLimit += gameObj.pollutionLimit;
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

  incrementResearch (province, typeStr, buildObj, gameObj) {
    let flagAdd = true;
    if (province.buildings[typeStr]) {
      province.buildings[typeStr].forEach(element => {
        if (element.name === buildObj.name) {
          element.count ++;
          flagAdd = false;
        }
      });
    }
    if (flagAdd) {
      buildObj.count++;
      province.buildings[typeStr].push(buildObj);
    }
    province.area -= buildObj.area;
    gameObj.researchIncrement += buildObj.researchSpeedGain;
    province.employed += buildObj.employee;
    province.worth += (buildObj.cost + (buildObj.cost/gameObj.worther));
  };

  decrementResearch (province, typeStr, buildObj, gameObj) {
    let flagRemove = false;
    let index = 0;
    if (province.buildings[typeStr]) {
      for (let i = 0; i < province.buildings[typeStr].length; i++) {
        const element = province.buildings[typeStr][i];
        if (element.name === buildObj.name) {
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
      province.area += buildObj.area;
      gameObj.researchIncrement -= buildObj.researchSpeedGain;
      province.employed -= buildObj.employee;
      province.worth -= (buildObj.cost + (buildObj.cost/gameObj.worther));
    }
  };

}
