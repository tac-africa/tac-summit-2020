import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-subject-matters',
  templateUrl: './subject-matters.component.html',
  styleUrls: ['./subject-matters.component.scss']
})
export class SubjectMattersComponent implements OnInit {
  @ViewChild('myModal', { static: false }) myModal: ElementRef;
  @ViewChild('close', { static: false }) close: ElementRef;


  constructor() { }

  ngOnInit() {
  }

  openClick() {
    this.myModal.nativeElement.style.display = "block";
    console.log('working')
  }

}
