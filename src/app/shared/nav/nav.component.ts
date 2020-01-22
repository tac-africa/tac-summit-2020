import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit {
  @ViewChild('top', { static: false }) top: ElementRef;
  @ViewChild('middle', { static: false }) middle: ElementRef;
  @ViewChild('bottom', { static: false }) bottom: ElementRef;
  isShow: boolean;
  topPosToStartShowing = 500;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  constructor() { }

  ngAfterViewInit() {
  }
  onClickMe() {
    this.top.nativeElement.classList.toggle('top-bar');
    this.middle.nativeElement.classList.toggle('middle-bar');
    this.bottom.nativeElement.classList.toggle('bottom-bar');
  }

}
