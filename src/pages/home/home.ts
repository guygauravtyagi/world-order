import { Component, ViewChildren } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GlobalProvider } from '../../providers/global/global';
import { ResearchServiceProvider } from '../../providers/research-service/research-service';
import { CommonMethodsProvider } from '../../providers/common-methods/common-methods';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChildren('tileComponent') tileComponent: any;
  tileInfoArr: Array<any> = [];
  ageList: Array<any> = [];
  gameObject: any;
  modalInfo: any = {};
  modalList: any = {};
  constructor(public navCtrl: NavController, private globalService: GlobalProvider, private researchService: ResearchServiceProvider, private commonService: CommonMethodsProvider) {
    this.globalService.getGameDummy().subscribe(data => this.gameSetupHelper(data), error => console.log(error));
  }

  ngOnInit() {

  }

  fillTiles() {
    this.tileInfoArr = [
      {
        displayName:'Research',
        name: 'research',
        progress: 1,
        description: "Description Here",
        progressSpeed: this.gameObject.researchProgress,
        allowNext: true,
      },
      {
        displayName:'Wonders',
        name: 'wonders',
        progress: 1,
        description: "Description Here",
        progressSpeed: '',
        allowNext: true,
      },
      {
        displayName:'Law',
        name: 'law',
        progress: 1,
        description: "Description Here",
        progressSpeed: '',
        allowNext: true,
      },
      {
        displayName:'Neighbours',
        name: 'neighbours',
        progress: 1,
        description: "Description Here",
        progressSpeed: '',
        allowNext: true,
      },
    ];
  }

  gameSetupHelper(data) {
    this.globalService.updateGameObject(data);
    this.globalService.gameCycle();
    this.gameObject = this.globalService.getGameObject();
    this.fillTiles();
    if (this.gameObject && (this.gameObject.age || this.gameObject.age === 0)) {
      if (this.gameObject.age !== 0) {
        this.incrementAge(this.gameObject.age);
      } else {
        let data = {
          age: 0,
          displayName: "Dark Age",
          researchList: [],
          nextAgeDisplayName: "Stone Age",
          ageResearchCost: 10,
        };
        this.globalService.setAgeData(data);
        this.updateAgeDetails(data);
      }
    }
  };

  incrementAge(ageId) {
    this.globalService.getAgeData(ageId).subscribe(data => this.ageDataSetupHelper(data), error => console.log(error));
  };

  ageDataSetupHelper(data) {
    this.modalList.showPopup = false;
    this.updateAgeDetails(data);
  };

  updateAgeDetails(data) {
    this.gameObject.researchList = data.researchList;
    this.gameObject.ageDisplayName = data.displayName;
    this.gameObject.nextAgeDisplayName = data.nextAgeDisplayName;
    this.gameObject.ageResearchCost = data.ageResearchCost;
  }

  headerIconClick(headerName) {
    switch (headerName) {
      case 'research':
        this.modalInfo = this.commonService.generateModalInfo('md-flask', 'Research', this.gameObject.researchPoints, 'This is research Tab', this.gameObject.researchIncrement);
        break;
      case 'population':
        this.modalInfo = this.commonService.generateModalInfo('md-people', 'Population', this.gameObject.population, 'This is population Tab', this.gameObject.researchIncrement);
        break;
      case 'pollution':
        this.modalInfo = this.commonService.generateModalInfo('md-warning', 'Pollution', this.gameObject.researchPoints, 'This is pollution Tab', this.gameObject.researchIncrement);
        break;
      default:
        break;
    }
  };

  tileClicked(tileInfo) {
    switch (tileInfo.name) {
      case 'research':
        if (this.tileInfoArr[0].allowNext)
        this.modalList = this.commonService.generateModalList("Research List", this.globalService.getAgeDataObj().researchList);
        break;
      default:
        break;
    }
  };

  listItemClicked(stuff) {
    this.tileComponent._results.forEach(element => {
      if (element.tileinfo.name === "research") {
        if (stuff.data === "age") {
          element.move(this.gameObject.nextAgeDisplayName);
          this.gameObject.age++;
          this.gameObject.researchPoints -= this.gameObject.ageResearchCost;
          this.incrementAge(this.gameObject.age);
        } else {
          element.move(stuff.data.name);
          this.gameObject = this.researchService.doResearch(this.gameObject);
        }
      }
    });
  };

}
