import { Component, OnInit } from '@angular/core';
import { VisitService } from 'app/services/visit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Visit } from 'models/visit.model';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-visit',
  templateUrl: './edit-visit.component.html',
  styleUrls: ['./edit-visit.component.css']
})
export class EditVisitComponent implements OnInit {

  visit: Visit;
  title: String;
  button: String;
  displayModal: boolean;


  constructor(
    private visitService: VisitService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.visitService.getOneVisit(id).subscribe(data => this.visit = data);
    this.title = 'Edit Visit';
    this.button = 'Update';
  }

  update(visit: Visit): void {
    this.visitService.putUpdateOneVisit(visit).subscribe(() => this.location.back())
  }

  delete(id: number): void {
    this.visitService.deleteOneVisit(id).subscribe(() => this.location.back())
  }

  toggleModal() {
    this.displayModal = !this.displayModal;
  }

}