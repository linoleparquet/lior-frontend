import { Component, OnInit, Input } from '@angular/core';
import { Visit } from 'models/visit.model';
import { Router } from '@angular/router';
import { DoctorService } from 'app/services/doctor.service';

@Component({
  selector: 'app-table-visit',
  templateUrl: './table-visit.component.html',
  styleUrls: ['./table-visit.component.css']
})
export class TableVisitComponent implements OnInit {

  @Input() visits: Visit[];
  @Input() title: String;

  constructor(private router: Router,
    private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

  openEditVisitPage(id: number) {
    this.router.navigate([`/visits/${id}/edit`]);
  }

}
