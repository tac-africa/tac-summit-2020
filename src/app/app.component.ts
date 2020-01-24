import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
declare var require: any

@Component({
  selector: 'app-root',
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tacsummit';
  logo = require("../assets/img/logo.png");

  constructor(private metaTagService: Meta) {
  }

  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@tacafrica' },
      { name: 'twitter:title', content: 'TAC Africa Drone & Counter Drone Summit' },
      { name: 'twitter:description', content: 'TAC Africa Drone  Summit     The proposed TAC Africa Summit 2020 will be organized under the patronage of the  Office of the National Security Adviser (ONSA) and the Ministry of Aviation in partnership with International organization and other Authorized Agencies.' },
      { name: 'twitter:image', content: "https://summit.tacafrica.org/assets/img/meta-logo.png" },
      { name: 'og:url', content: 'https://summit.tacafrica.org' },
      { name: 'og:title', content: 'TAC Africa Drone & Counter Drone Summit' },
      { name: 'og:description', content: 'TAC Africa Drone  Summit     The proposed TAC Africa Summit 2020 will be organized under the patronage of the  Office of the National Security Adviser (ONSA) and the Ministry of Aviation in partnership with International organization and other Authorized Agencies.' },
      { name: 'og:image', content: "https://summit.tacafrica.org/assets/img/meta-logo.png"},
    ]);
  }
}
