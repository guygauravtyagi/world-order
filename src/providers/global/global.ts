import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class GlobalProvider {
  private gameObj: any;
  private CONST_GAME_CYCLE:Number = 1000;

  constructor(public http: HttpClient) {

  }

  getGameObject () {
    return this.gameObj;
  };

  updateGameObject (gameObj) {
    this.gameObj = gameObj;
  };

  gameCycle () {
    setInterval(()=> {
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

  finishResearch () {
    this.gameObj.researchCount++;
  };

  runInCycle () {
    this.gameObj.researchPoints += this.gameObj.researchIncrement;
  };

  finishLaw () {

  };

  getInsideObj (obj, srtName) {
    return obj[srtName];
  };

  getGameDummy(){
    let apiUrl = './assets/data/api/gameDummy.json';
    return this.http.get(apiUrl)
    .map( (response: Response) => {
       const data = response;
       return data;
    });
 }

}
