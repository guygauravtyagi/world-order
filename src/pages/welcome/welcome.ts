import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //comment this when releasing
    this.navCtrl.push(TabsPage, {}, { animate: false });
  }

  login() {
    //uncomment this when releasing
    //this.navCtrl.push(TabsPage, {}, { animate: false });
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

}
