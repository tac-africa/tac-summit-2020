import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-co-creation-lab',
  templateUrl: './co-creation-lab.component.html',
  styleUrls: ['./co-creation-lab.component.scss']
})
export class CoCreationLabComponent implements OnInit {
  title = 'Virtual Co-creation Group'
  abdul = `${environment.baseURL}/assets/img/abdul.jpg`;
  bright = `${environment.baseURL}/assets/img/bright.jpg`;
  kind = `${environment.baseURL}/assets/img/kind.jpg`;
  ibrahim = `${environment.baseURL}/assets/img/Ibrahim.jpg`;
  sylvernus = `${environment.baseURL}/assets/img/sylvernus.jpg`;

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
        text: "Abdullazeez Ocheja",
        image: this.abdul,
        link: "#",
      },
      {
        id: 2,
        text: "Bright Lawrence",
        image: this.bright,
        link: "#",
      },
      {
        id: 3,
        text: "Kind Akubo",
        image: this.kind,
        link: "#",
      },
      {
        id: 4,
        text: "Ibrahim Ali",
        image: this.ibrahim,
        link: "#",
      },
      {
        id: 5,
        text: "Sylvernus Akubo",
        image: this.sylvernus,
        link: "#",
      },
    ]
}
