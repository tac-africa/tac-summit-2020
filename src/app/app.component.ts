import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tacsummit';

  constructor(private metaTagService: Meta) {
  }

  ngOnInit() {
    AOS.init();
    this.metaTagService.addTags([
      { property: 'name:description', content: 'TAC Africa Summit 2020 will be organized under the patronage of the  Office of the National Security Adviser (ONSA) and the Ministry of Aviation in partnership with International organization and other Authorized Agencies.' },
      //Facebook Meta Tags
      { property: 'og:url', content: 'https://summit.tacafrica.org/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'TAC Africa Summit' },
      { property: 'og:description', content: 'TAC Africa Summit 2020 will be organized under the patronage of the  Office of the National Security Adviser (ONSA) and the Ministry of Aviation in partnership with International organization and other Authorized Agencies.' },
      { property: 'og:image', content: "https://summit.tacafrica.org/assets/img/meta-logo.png" },

      //Twitter Meta Tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'TAC Africa Drone Summit' },
      { name: 'twitter:description', content: 'TAC Africa Summit 2020 will be organized under the patronage of the  Office of the National Security Adviser (ONSA) and the Ministry of Aviation in partnership with International organization and other Authorized Agencies.' },
      { name: 'twitter:image', content: "https://summit.tacafrica.org/assets/img/meta-logo.png" },

      //Google / Search Engine Tags
      { property: 'itemprop:name', content: 'TAC Africa Drone Summit' },
      { property: 'itemprop:description', content: 'TAC Africa Summit 2020 will be organized under the patronage of the  Office of the National Security Adviser (ONSA) and the Ministry of Aviation in partnership with International organization and other Authorized Agencies.' },
      { property: 'itemprop:image', content: "https://summit.tacafrica.org/assets/img/meta-logo.png" },
    ], true);
  }
}
