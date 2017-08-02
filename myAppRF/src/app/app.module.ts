import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GeneralComponentsPage } from '../pages/general-components/general-components';
import { HomePage } from '../pages/home/home';
import { OverlayPage } from '../pages/overlay/overlay';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OverlayPage,
    GeneralComponentsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,
    {
      mode: 'md'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OverlayPage,
    GeneralComponentsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
