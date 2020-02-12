import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StructureService } from 'src/app/errors/structure.service';

@Component({
  selector: 'app-subject-matters',
  templateUrl: './subject-matters.component.html',
  styleUrls: ['./subject-matters.component.scss']
})
export class SubjectMattersComponent implements OnInit {
  structures = [];

  constructor(private structureService: StructureService, private modalService: NgbModal) { }

  ngOnInit() {
    this.structureService.getStructure().subscribe((data: any[]) => {
      this.structures = data;
    })
  }

  open(content) {
    this.modalService.open(content, {
      windowClass: 'modal-fade', 
      ariaLabelledBy: 'subject-matters-expert',
      centered: true,
      keyboard: true
    })
  }

}
