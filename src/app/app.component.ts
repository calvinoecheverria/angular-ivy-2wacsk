import { Component, VERSION } from '@angular/core';

import * as NGYTPackage from '../../package.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  id = 'atAyeb9Y2bQ';
  playerVars = {
    cc_lang_pref: 'en',
  };
  version = '...';
  private player;
  public ytEvent;

  constructor() {
    this.version = NGYTPackage['dependencies']['ngx-youtube-player'].replace(
      '^',
      ''
    );
  }
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }
}
