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
  itdt = `${environment.baseURL}/assets/img/aderanti.png`;

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
        text: "Aderanti",
        image: this.itdt,
        link: "https://www.dronetechinstitute.com/",
      },
      {
        id: 2,
        text: "Aderanti",
        image: this.itdt,
        link: "https://www.dronetechinstitute.com/",
      },
      {
        id: 3,
        text: "Aderanti",
        image: this.itdt,
        link: "https://www.dronetechinstitute.com/",
      },
      {
        id: 4,
        text: "Aderanti",
        image: this.itdt,
        link: "https://www.dronetechinstitute.com/",
      },
      {
        id: 5,
        text: "Aderanti",
        image: this.itdt,
        link: "https://www.dronetechinstitute.com/",
      },
    ]
}
