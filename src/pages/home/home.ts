import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tileInfoArr: Array<any> = [];
  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    this.tileInfoArr = [
      {
        tileName :'Tile One'
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

}
