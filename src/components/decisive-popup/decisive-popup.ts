import { Component, Input } from '@angular/core';

@Component({
  selector: 'decisive-popup',
  templateUrl: 'decisive-popup.html'
})
export class DecisivePopupComponent {
  @Input('modalInfo') modalInfo;

  text: string;

  constructor() {
    console.log('Hello DecisivePopupComponent Component');
    this.text = 'Hello World';
  }  
  
  closePopup() {
    this.modalInfo.showPopup = false;
  };
}
