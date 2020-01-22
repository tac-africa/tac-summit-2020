import { Component, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('titleSvg', { static: false }) titleSvg: ElementRef;
  @ViewChild('line1', { static: false }) line1: ElementRef;
  @ViewChild('line2', { static: false }) line2: ElementRef;
  @ViewChildren('path') logo: QueryList<ElementRef>;




  constructor() { }

  ngAfterViewInit() {

    this.titleSvg.nativeElement.classList.toggle('active');
    this.line1.nativeElement.classList.toggle('line_one_active');
    this.line2.nativeElement.classList.toggle('line_two_active');

    //animate
    this.logo.forEach((link, index) => {
      if (link.nativeElement.style.animation) {
        link.nativeElement.style.animation = '';
      } else {
        link.nativeElement.style.animation = `lineMove 1.2s ease-in-out forwards ${index / 8 + 0.3}s`;
      }
    })

    document.getElementById('date').innerHTML =
      `#TACAfricasummit2020`;
  }

}
