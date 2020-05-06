import { Component, OnInit } from '@angular/core';
import { Doctor } from 'models/doctor.model';
import { DoctorService } from 'app/services/doctor.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {

  doctor$: Observable<Doctor>;

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.doctor$ = this.doctorService.getOneDoctor(id)
  }

}
