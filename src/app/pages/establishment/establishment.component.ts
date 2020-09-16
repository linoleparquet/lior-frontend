import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'app/services/doctor.service';
import { EstablishmentService } from 'app/services/establishment.service';
import { Doctor } from 'models/doctor.model';
import { Establishment } from 'models/establishment.model';
import { Observable } from 'rxjs';
import { DEPARTMENT } from '../../../../dist/assets/json/departments';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.css']
})
export class EstablishmentComponent implements OnInit {

  establishment$: Observable<Establishment>;
  doctors$: Observable<Doctor[]>;
  id: number;

  constructor(
    private doctorService: DoctorService,
    private establishmentService: EstablishmentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.doctors$ = this.doctorService.getDoctorsByEstablishment(this.id);
    this.establishment$ = this.establishmentService.getOneEstablishment(this.id);
  }

  getDepartmentName(number: number): string {
    return DEPARTMENT.find(department => department.num_dep == number).dep_name;
  }

}
