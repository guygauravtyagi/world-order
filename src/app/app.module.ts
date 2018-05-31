import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { FloorPipe } from '../pipes/floor/floor';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalProvider } from '../providers/global/global';

import {TileComponent} from '../components/tile/tile';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProvincesPage } from '../pages/provinces/provinces';
import { BuildPage } from '../pages/build/build';
import { CommonMethodsProvider } from '../providers/common-methods/common-methods';

@NgModule({
  declarations: [
    MyApp,
    FloorPipe,
    TileComponent,
    AboutPage,
    HomePage,
    TabsPage,
    ProvincesPage,
    LoginPage,
    SignupPage,
    WelcomePage,
    BuildPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TileComponent,
    AboutPage,
    HomePage,
    TabsPage,
    ProvincesPage,
    LoginPage,
    SignupPage,
    WelcomePage,
    BuildPage,
  ],
  providers: [
    HttpClientModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider,
    CommonMethodsProvider
  ]
})
export class AppModule {}
