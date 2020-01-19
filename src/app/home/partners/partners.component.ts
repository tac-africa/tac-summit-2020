import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var require: any
@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  itdt = require("../../../assets/img/itdt.png");
  droneAlert = require("../../../assets/img/drone-alert.png");
  newAerial = require("../../../assets/img/new-aerial.png");
  greyHare = require("../../../assets/img/grey-hare.png");
  danielsSecurity = require("../../../assets/img/daniels-security.png");





  constructor() { }

  ngOnInit() {
  }

  customOptions: OwlOptions = {
    margin: 25,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }



  images = [
    {
      id: 1,
      text: "Everfresh Flowers",
      image: this.itdt,
    },
    {
      id: 2,
      text: "Festive Deer",
      image: this.droneAlert,
    },
    {
      id: 3,
      text: "Morning Greens",
      image: this.newAerial,
    },
    {
      id: 4,
      text: "Bunch of Love",
      image: this.greyHare,
    },
    {
      id: 5,
      text: "Blue Clear",
      image: this.danielsSecurity,
    },
  ]

}
