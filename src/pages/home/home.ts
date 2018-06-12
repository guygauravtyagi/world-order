import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('tileComponent') tileComponent: any;
  tileInfoArr: Array<any> = [];
  ageList: Array<any> = [];
  gameObject: any;
  modalInfo: any = {};
  modalList: any = {};
  constructor(public navCtrl: NavController, private globalService: GlobalProvider) {
    this.globalService.getGameDummy().subscribe(data => this.gameSetupHelper(data), error => console.log(error));
  }

  ngOnInit() {

  }

  fillTiles() {
    this.tileInfoArr = [
      {
        name: 'Research',
        progress: 1,
        description: "Description Here",
        progressSpeed: this.gameObject.researchProgress,
        allowNext: true,
      },
      {
        name: 'Wonders',
        progress: 0,
        description: "Description Here",
        progressSpeed: '',
        allowNext: true,
      },
      {
        name: 'Law',
        progress: 0,
        description: "Description Here",
        progressSpeed: '',
        allowNext: true,
      },
      {
        name: 'Neighbour Provinces',
        progress: 0,
        description: "Description Here",
        progressSpeed: '',
        allowNext: true,
      },
    ];
  }

  gameSetupHelper(data) {
    this.globalService.updateGameObject(data);
    this.globalService.gameCycle();
    this.gameObject = this.getGameObject();
    this.fillTiles();
    if (this.gameObject && (this.gameObject.age || this.gameObject.age === 0)) {
      if (this.gameObject.age !== 0) {
        this.incrementAge(this.gameObject.age);
      } else {
        this.globalService.setAgeData(
          {
            age: 0,
            displayName: "Stone Age",
            researchList: []
          });
      }
    }
  };

  incrementAge(ageId) {
    this.globalService.getAgeData(ageId).subscribe(data => this.ageDataSetupHelper(data), error => console.log(error));
  };

  ageDataSetupHelper(data) {
    this.modalList.showPopup = false;
    this.gameObject.researchList = data.researchList;
    this.gameObject.ageDisplayName = data.displayName;
  };

  headerIconClick(headerName) {
    switch (headerName) {
      case 'research':
        this.fillModalInfo('md-flask', 'Research', this.gameObject.researchPoints, 'This is research Tab', this.gameObject.researchIncrement);
        break;
      case 'population':
        this.fillModalInfo('md-people', 'Population', this.gameObject.population, 'This is population Tab', this.gameObject.researchIncrement);
        break;
      case 'pollution':
        this.fillModalInfo('md-warning', 'Pollution', this.gameObject.researchPoints, 'This is pollution Tab', this.gameObject.researchIncrement);
        break;
      default:
        break;
    }
  };

  fillModalInfo(icon, title, value, description, growth) {
    this.modalInfo['showPopup'] = true;
    this.modalInfo['icon'] = icon;
    this.modalInfo['title'] = title;
    this.modalInfo['value'] = value;
    this.modalInfo['description'] = description;
    this.modalInfo['growth'] = growth;
  };

  fillModalList(title, list) {
    this.modalList['showPopup'] = true;
    this.modalList['title'] = title;
    this.modalList['list'] = list;
  };

  tileClicked(tileInfo) {
    switch (tileInfo.name) {
      case 'Research':
        if (this.tileInfoArr[0].allowNext)
          this.doResearch();
        break;
      default:
        break;
    }
  };

  listItemClicked(stuff) {
    if (stuff.data === "age") {
      this.tileComponent.move();
      this.incrementAge(this.gameObject.age + 1);
    } else {

    }
  };

  doResearch() {
    this.fillModalList("Research List", this.globalService.getAgeDataObj().researchList);
  };

  private getGameObject() {
    return this.globalService.getGameObject();
  };

}
