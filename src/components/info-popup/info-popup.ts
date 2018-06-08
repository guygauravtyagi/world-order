import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-popup',
  templateUrl: 'info-popup.html'
})
export class InfoPopupComponent {
  @Input('modalInfo') modalInfo;

  text: string;

  constructor() {

  }

  closePopup() {
    this.modalInfo.showPopup = false;
  };

}
