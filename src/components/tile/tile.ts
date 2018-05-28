import { Component, Input } from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: 'tile.html'
})
export class TileComponent {
  @Input('tileinfo') tileinfo;
  text: string;

  constructor() {

  }

  ngOnInit() {    
    this.text = this.tileinfo.tileName;
  }

}
