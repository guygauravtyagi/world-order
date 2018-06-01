import { Component } from '@angular/core';
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
    this.globalService.getGameDummy().subscribe(data => this.startHelper(data) , error => console.log(error));
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
  
  startHelper(data) {
    this.globalService.updateGameObject(data);
    this.globalService.gameCycle();
    this.gameObject = this.getGameObject();
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
