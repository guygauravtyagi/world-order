import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ResearchServiceProvider {

  constructor(public http: HttpClient) {

  };

  doResearch (gameObj, researchObj) {
    gameObj.researchPoints -= researchObj.costRPoints;
    return gameObj;
  };

}
