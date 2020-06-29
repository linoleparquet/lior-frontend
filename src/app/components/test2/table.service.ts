import { Injectable, PipeTransform, Inject } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { DecimalPipe, AsyncPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap, map, filter } from 'rxjs/operators';
import { SortColumn, SortDirection } from '../../directive/sortable.directive';
import { DOCTORS } from 'app/mock/database.mock';
import { DoctorService } from 'app/services/doctor.service';
import { Doctor } from 'models/doctor.model';
import { HttpClient } from '@angular/common/http';


interface State {
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string, v2: string) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(countries: Doctor[], column: SortColumn, direction: string): Doctor[] {
  if (direction === '' || column === '') {
    return countries;
  } else {
    return [...countries].sort((a, b) => {
      const res = compare(`${a[column]}`, `${b[column]}`);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(country: Doctor, term: string) {
  return country.name.toLowerCase().includes(term.toLowerCase())
}
@Injectable({ providedIn: 'root' })
export class TableService {
  private _search$ = new Subject<void>();
  private _countries$ = new BehaviorSubject<Doctor[]>([]);

  private _state: State = {
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };
  //private _DOCTORS: Doctor[] = [];

  constructor(
    @Inject('dooctors2') private _DOCTORS: Doctor[]
  ) {
    this._search$.pipe(
      switchMap(() => this._search()),
    ).subscribe(result => {
      this._countries$.next(result);
    });

    this._search$.next();
  }

  get countries$() { return this._countries$.asObservable(); }
  get searchTerm() { return this._state.searchTerm; }

  set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
  set sortColumn(sortColumn: SortColumn) { this._set({ sortColumn }); }
  set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }
  //set DOCTORS(doctors: Doctor[]) { this._DOCTORS = doctors }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<Doctor[]> {
    const { sortColumn, sortDirection, searchTerm } = this._state;

    // 1. sort
    let countries = sort(this._DOCTORS, sortColumn, sortDirection);

    // 2. filter
    countries = countries.filter(country => matches(country, searchTerm));

    return of(countries);
  }
}

