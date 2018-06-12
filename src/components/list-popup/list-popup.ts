import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-popup',
  templateUrl: 'list-popup.html'
})
export class ListPopupComponent {
  @Input('modalList') modalList;
  @Output() listItemClicked = new EventEmitter();

  text: string;

  constructor() {

  };

  startStuff(listItem): void {
    this.listItemClicked.emit({
      data: listItem
    });
  }

  closePopup() {
    this.modalList.showPopup = false;
  };

}
