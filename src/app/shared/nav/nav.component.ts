import { Component, ViewChild, ElementRef, AfterViewInit, HostListener, Inject, OnInit, Input } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('top', { static: false }) top: ElementRef;
  @ViewChild('middle', { static: false }) middle: ElementRef;
  @ViewChild('bottom', { static: false }) bottom: ElementRef;
  isShow: boolean
  topPosToStartShowing = 250;



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

  constructor() { 
  }

  ngOnInit() {
    
    $(".dropdown").hover(function () {
      $(".dropdown-menu").dropdown('show');
      $(this).find(".dropdownToggle").attr("aria-expanded", "true");
    }, function() {
      $(".dropdown-menu").dropdown('hide');
      $(this).find(".dropdownToggle").attr("aria-expanded", "false");
    });

    if ($(".dropdown-item").hasClass("active") === true ) {
      console.log("silva");
      $(".nav-summit").removeClass("active");
    } else {
      $(".nav-summit").addClass("active");
    }


  }
  onClickMe() {
    this.top.nativeElement.classList.toggle('top-bar');
    this.middle.nativeElement.classList.toggle('middle-bar');
    this.bottom.nativeElement.classList.toggle('bottom-bar');
  }

}
