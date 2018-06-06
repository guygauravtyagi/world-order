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
  constructor(public navCtrl: NavController, private globalService: GlobalProvider) {
    this.globalService.getGameDummy().subscribe(data => this.gameSetupHelper(data) , error => console.log(error));
  }

  ngOnInit() {
    this.tileInfoArr = [
      {
        name :'Research'
      },
      {
        name :'Tile Two'
      },
      {
        name :'Tile Three'
      },
      {
        name :'Tile Four'
      },
    ];
  }
  
  gameSetupHelper(data) {
    this.globalService.updateGameObject(data);
    this.globalService.gameCycle();
    this.gameObject = this.getGameObject();
    if (this.gameObject && this.gameObject.age) {
      this.globalService.getAgeData(1).subscribe(data => this.ageDataSetupHelper(data) , error => console.log(error));
    }
  };

  ageDataSetupHelper(data) {

  };

  tileClicked (tileInfo) {
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

  private getGameObject () {
    return this.globalService.getGameObject();
  };

}
