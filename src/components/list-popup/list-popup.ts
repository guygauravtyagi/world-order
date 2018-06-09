import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-popup',
  templateUrl: 'list-popup.html'
})
export class ListPopupComponent {
  @Input('modalList') modalList;

  text: string;

  constructor() {
    
  }
  
  closePopup() {
    this.modalList.showPopup = false;
  };

}
