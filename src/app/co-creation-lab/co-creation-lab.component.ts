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
  title = 'Co-creation Lab'
  cocreation_lab = `${environment.baseURL}/cocreation-lab.jpg`;
  office = `${environment.baseURL}/office.jpg`;
  officers = `${environment.baseURL}/officers.jpg`;


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
      text: "cocreation-lab",
      image: this.cocreation_lab,
    },
    {
      id: 2,
      text: "office",
      image: this.office,
    },
    {
      id: 3,
      text: "officers",
      image: this.officers,
    },
  ]

  open(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'Advisory-board', 
      windowClass: 'modal-fade',
      centered: true,
      keyboard: true })
  }
}
