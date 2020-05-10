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

  visit$: Observable<Visit>;
  title: String;
  button: String;


  constructor(
    private visitService: VisitService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.visit$ = this.visitService.getOneVisit(id);
    this.title = 'Edit Visit';
    this.button = 'Update';
  }

  update(visit: Visit): void {
    this.visitService.putUpdateOneVisit(visit).subscribe((a) => { console.log(a); this.location.back() })
  }

  delete(id: number): void {
    this.visitService.deleteOneVisit(id).subscribe(() => this.location.back())
  }
}
