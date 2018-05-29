import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tileInfoArr: Array<any> = [];
  gameObject: any;
  constructor(public navCtrl: NavController, private globalService: GlobalProvider) {
  }

  ngOnInit() {
    this.globalService.startGame();
    this.tileInfoArr = [
      {
        tileName :'Research'
      },
      {
        tileName :'Tile Two'
      },
      {
        tileName :'Tile Three'
      },
      {
        tileName :'Tile Four'
      },
    ];
  }

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
    this.gameObject = this.getGameObject();
    this.gameObject['activeResearch'] = {
      name: "Something Research",
      timeRemaining: 20,
    }
  };

  private getGameObject () {
    return this.globalService.getGameObject();
  };

}
