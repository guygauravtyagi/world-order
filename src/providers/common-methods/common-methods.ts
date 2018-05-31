import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { App } from 'ionic-angular';

import { GlobalProvider } from '../../providers/global/global';

import { ProvincesPage } from '../../pages/provinces/provinces';

@Injectable()
export class CommonMethodsProvider {

  constructor(public http: HttpClient, public app: App, private globalService: GlobalProvider) {

  }
  
  goBack (previousPage) {
    let nav = this.app.getActiveNav();
    switch (previousPage) {
      case 'province':
        nav.setRoot(ProvincesPage);
        break;
    
      default:
        break;
    }
  };

}
