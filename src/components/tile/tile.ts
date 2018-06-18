import { Component, Input } from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: 'tile.html'
})
export class TileComponent {
  @Input('tileinfo') tileinfo;
  private myProgress: any;
  private myBar: any;

  constructor() {

  };

  ngOnInit() {
  };

  ngAfterViewInit() {
    this.myProgress = document.getElementById('tileProgress-'+this.tileinfo.name);
    this.myBar = document.getElementById('tileBar-'+this.tileinfo.name);
    if(this.myProgress) {
      this.myProgress.style.display = 'none';
    }
  };

  move(value) {
    let elem = this.myBar;
    let elemContainer = this.myProgress;
    let id = setInterval(frame, this.tileinfo.progressSpeed * 1000);
    this.tileinfo.active = value;
    let val = this.tileinfo;
    val.allowNext = false;
    function frame() {
      if (val.progress >= 100) {
        clearInterval(id);
        delete val.active;
        val.allowNext = true;
        val.progress = 1;
        elem.style.width = '0%';
        elemContainer.style.display = 'none';
      } else {
        elemContainer.style.display = 'block';
        val.progress++;
        elem.style.width = val.progress + '%';
      }
    }
  }

}
