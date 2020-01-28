import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-page-nav',
  templateUrl: './header-page-nav.component.html',
  styleUrls: ['./header-page-nav.component.scss']
})
export class HeaderPageNavComponent implements OnInit {
  @Input('title') titleName: string;

  constructor() { }

  ngOnInit() {
  }

}
