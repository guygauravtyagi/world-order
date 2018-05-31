import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { ProvincesPage } from '../provinces/provinces';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1Root = HomePage;
  tab2Root = ProvincesPage;
  tab3Root = AboutPage;
  constructor() {

  }
}
