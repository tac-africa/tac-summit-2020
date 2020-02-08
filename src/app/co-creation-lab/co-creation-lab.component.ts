import { StructureService } from './../errors/structure.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  structures = [];

  constructor(private structureService: StructureService, private modalService: NgbModal) { }

  ngOnInit() {
    this.structureService.getStructure().subscribe((data: any[]) => {
      this.structures = data;
    })
  }
  customOptions: OwlOptions = {
    margin: 25,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
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

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
  }
}
