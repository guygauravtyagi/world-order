import { Component, Input } from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: 'tile.html'
})
export class TileComponent {
  @Input('tileinfo') tileinfo;

  constructor() {

  };

  ngOnInit() {

  };

  move() {
    let elem = document.getElementById("myBar");
    let id = setInterval(frame, this.tileinfo.progressSpeed * 1000);
    let val = this.tileinfo;
    val.allowNext = false;
    function frame() {
      if (val.progress >= 100) {
        clearInterval(id);
        val.allowNext = true;
        val.progress = 0;
      } else {
        val.progress++;
        elem.style.width = val.progress + '%';
      }
    }
  }

}
