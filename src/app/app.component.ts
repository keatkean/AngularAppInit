import { Component } from '@angular/core';
import {AppConfigService} from './appConfig.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected apiServer = AppConfigService.settings.apiServer;

  constructor() {
    console.log(this.apiServer.link1);
    console.log(this.apiServer.link2);
  }
}
