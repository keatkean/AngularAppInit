import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppInitService} from './app-init.service';
import {AppConfigService} from './appConfig.service';
import {HttpClientModule} from '@angular/common/http';

export function initializeApp1(appInitService: AppInitService) {
  return (): Promise<any> => {
    return appInitService.Init();
  };
}
export function initializeApp2() {
  return (): Promise<any> => {
    return new Promise((resolve, reject) => {
      console.log(`initializeApp2 called`);
      setTimeout(() => {
        console.log(`initializeApp2 Finished`);
        resolve();
      }, 2000);
    });
  };
}
export function initializeApp(appConfigService: AppConfigService) {
  return (): Promise<any> => {
    return appConfigService.load();
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AppInitService, AppConfigService,
    { provide: APP_INITIALIZER, useFactory: initializeApp1, deps: [AppInitService], multi: true},
    { provide: APP_INITIALIZER, useFactory: initializeApp2, multi: true},
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps:  [AppConfigService], multi: true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
