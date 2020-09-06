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
    this.visits.forEach(visit =>
      this.doctorService.getOneDoctor(visit.doctorId).subscribe(doctor => visit.doctor = doctor.surname + " " + doctor.name)
    )
  }

  openEditVisitPage(id: number) {
    this.router.navigate([`/visit/${id}/edit`]);
  }

}
