import { Component, Input } from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: 'tile.html'
})
export class TileComponent {
  @Input('tileinfo') tileinfo;
  text: string;

  constructor() {

  };

  ngOnInit() {    
    this.text = this.tileinfo.name;
  };

  move() {
    var elem = document.getElementById("myBar");   
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

}
