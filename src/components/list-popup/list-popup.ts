import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'list-popup',
  templateUrl: 'list-popup.html',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(0%)'}),
        animate('200ms ease-in', style({transform: 'translateY(50%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-50%)'}))
      ])
    ])
  ]
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
  };

  opendesCription(flag, obj) {
    if (flag) {
      this.modalList.list.forEach(element => {
        element.openDes = false;
      });
    }    
    obj.openDes = flag;
  };

  closePopup() {
    this.modalList.showPopup = false;
  };

}
