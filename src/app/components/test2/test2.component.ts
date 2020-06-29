import { Component, OnInit, ViewChildren, QueryList, PipeTransform } from '@angular/core';
import { DOCTOR_TABLE_HEADER, DOCTORS } from 'app/mock/database.mock';
import { DoctorService } from 'app/services/doctor.service';
import { NgbdSortableHeader, SortEvent, SortColumn, SortDirection } from 'app/directive/sortable.directive';
//import { CountryService } from '../test/country.service';
import { DecimalPipe, AsyncPipe } from '@angular/common';
import { Subject, Observable, of, BehaviorSubject } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { TableService } from './table.service';
import { Doctor } from 'models/doctor.model';


@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
  providers: [{ provide: 'dooctors2', useValue: '123' }]
})

export class Test2Component {

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  doctors$: Observable<Doctor[]>
  dooctors: Doctor[] = DOCTORS;

  constructor(public service: TableService, public doctorService: DoctorService) {
    this.doctors$ = service.countries$;
  }

  ngOnInit() {
    // this.doctorService.getAllDoctors().subscribe((doc) => {
    //   this.dooctors = doc;
    // })
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}