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

  move(value) {
    let elem = document.getElementById("myBar");
    let id = setInterval(frame, this.tileinfo.progressSpeed * 1000);
    this.tileinfo.active = value;
    let val = this.tileinfo;
    val.allowNext = false;
    function frame() {
      if (val.progress >= 100) {
        clearInterval(id);
        delete this.tileinfo.active;
        val.allowNext = true;
        val.progress = 0;
      } else {
        val.progress++;
        elem.style.width = val.progress + '%';
      }
    }
  }

}
