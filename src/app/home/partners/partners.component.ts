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
      text: "Institute Of Drone Technology Australia",
      image: this.itdt,
      link: "https://www.dronetechinstitute.com/",
    },
    {
      id: 2,
      text: "Drone Alert",
      image: this.droneAlert,
      link: "https://www.drone-detectives.com/",
    },
    {
      id: 3,
      text: "New Age Aerial",
      image: this.newAerial,
      link: "https://newageaerial.com/"
    },
    {
      id: 4,
      text: "Grey Hare Media",
      image: this.greyHare,
      link: "https://greyharemedia.com/",
    },
    {
      id: 5,
      text: "Daniels Security",
      image: this.danielsSecurity,
      link: "https://daniels-security.com/",
    },
  ]

}
