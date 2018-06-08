import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tileInfoArr: Array<any> = [];
  ageList: Array<any> = [];
  gameObject: any;
  modalInfo: any = {};
  constructor(public navCtrl: NavController, private globalService: GlobalProvider) {
    this.globalService.getGameDummy().subscribe(data => this.gameSetupHelper(data), error => console.log(error));
  }

  ngOnInit() {
    this.tileInfoArr = [
      {
        name: 'Research'
      },
      {
        name: 'Tile Two'
      },
      {
        name: 'Tile Three'
      },
      {
        name: 'Tile Four'
      },
    ];
  }

  gameSetupHelper(data) {
    this.globalService.updateGameObject(data);
    this.globalService.gameCycle();
    this.gameObject = this.getGameObject();
    if (this.gameObject && this.gameObject.age) {
      this.globalService.getAgeData(1).subscribe(data => this.ageDataSetupHelper(data), error => console.log(error));
    }
  };

  ageDataSetupHelper(data) {

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

  tileClicked(tileInfo) {
    switch (tileInfo.tileName) {
      case 'Research':
        this.doResearch();
        break;
      default:
        break;
    }
  }

  doResearch() {
    this.gameObject['activeResearch'] = {
      name: "Something Research",
      timeRemaining: 20,
    }
  };

  private getGameObject() {
    return this.globalService.getGameObject();
  };

}
