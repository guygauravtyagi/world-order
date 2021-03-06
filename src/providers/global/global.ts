import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class GlobalProvider {
  private gameObj: any;
  private CONST_GAME_CYCLE: Number = 1000;
  private AGE_DATA:any;

  constructor(public http: HttpClient) {

  }

  getGameObject() {
    return this.gameObj;
  };

  updateGameObject(gameObj) {
    this.gameObj = gameObj;
  };

  gameCycle() {
    setInterval(() => {
      if (this.gameObj.activeResearch) {
        if (this.gameObj.activeResearch.timeRemaining === 0) {
          this.finishResearch();
          delete this.gameObj.activeResearch;
        } else {
          this.gameObj.activeResearch.timeRemaining--;
        }
      }
      if (this.gameObj.activeLaw) {
        if (this.gameObj.activeLaw.timeRemaining === 0) {
          this.finishLaw();
          delete this.gameObj.activeLaw;
        } else {
          this.gameObj.activeLaw.timeRemaining--;
        }
      }
      if (this.gameObj.activeBuild) {
        if (this.gameObj.activeBuild.timeRemaining === 0) {
          this.finishLaw();
          delete this.gameObj.activeBuild;
        } else {
          this.gameObj.activeBuild.timeRemaining--;
        }
      }
      this.runInCycle();
    }, this.CONST_GAME_CYCLE);
  };

  finishResearch() {
    this.gameObj.researchCount++;
  };

  runInCycle() {
    this.gameObj.researchPoints += this.gameObj.researchIncrement;
    this.updateDataFromProvinces();
  };

  updateDataFromProvinces () {
    this.gameObj.provinces.forEach(element => {
      if (element.populationLimit > element.population) {
        element.population++;
        this.gameObj.population++;
      }
      if (element.pollutionLimit > element.pollution) {
        element.pollution++;
        this.gameObj.pollution++;
      }
    });
  };

  finishLaw() {

  };

  getInsideObj(obj, srtName) {
    return obj[srtName];
  };

  getGameDummy() {
    return this.http.get('./assets/data/api/gameDummy.json')
      .map((response: Response) => {
        const data = response;
        return data;
      });
  };

  getAgeDataObj () {
    return this.AGE_DATA;
  };

  getAgeData(age) {
    return this.http.get('./assets/data/api/dataDummyAge_'+ age +'.json')
      .map((response: Response) => {
        this.AGE_DATA = response;
        return this.AGE_DATA;
      });
  };

  setAgeData (value) {
    this.AGE_DATA = value;
    return this.AGE_DATA;
  };

  getBuildHouseDummy() {
    return this.http.get('./assets/data/api/buildHouseDummy.json')
      .map((response: Response) => {
        const data = response;
        return data;
      });
  };

  getHomeTilesDummy() {
    return this.http.get('./assets/data/api/homeTileListDummy.json')
      .map((response: Response) => {
        const data = response;
        return data;
      });
  };
}
