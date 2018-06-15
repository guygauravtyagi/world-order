import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { App } from 'ionic-angular';

@Injectable()
export class CommonMethodsProvider {

  constructor(public http: HttpClient, public app: App) {

  };

  generateModalInfo(icon, title, value, description, growth) {
    let obj = {};
    obj['showPopup'] = true;
    obj['icon'] = icon;
    obj['title'] = title;
    obj['value'] = value;
    obj['description'] = description;
    obj['growth'] = growth;
    return obj;
  };

  generateModalList(title, list) {
    let obj = {};
    obj['showPopup'] = true;
    obj['title'] = title;
    obj['list'] = list;
    return obj;
  };
}
