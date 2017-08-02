import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { GeneralComponentsPage } from '../pages/general-components/general-components';
import { HomePage } from '../pages/home/home';
import { OverlayPage } from '../pages/overlay/overlay';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages: Array<{title:string, component: any}> = [];
  rootPage = HomePage;

  constructor(
    platform: Platform,
    public menuCtrl: MenuController
  ) {

    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'Overlay Components', component: OverlayPage},
      {title: 'Components', component: GeneralComponentsPage}
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page: {title:string, component: any}): void{
    this.rootPage = page.component;
    this.menuCtrl.close();
  }
}
