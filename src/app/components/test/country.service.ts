import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from '../../directive/sortable.directive';
const COUNTRIES: Country[] = [
  {
    id: 1,
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    id: 2,
    name: 'France',
    flag: 'c/c3/Flag_of_France.svg',
    area: 640679,
    population: 64979548
  },
  {
    id: 3,
    name: 'Germany',
    flag: 'b/ba/Flag_of_Germany.svg',
    area: 357114,
    population: 82114224
  },
  {
    id: 4,
    name: 'Portugal',
    flag: '5/5c/Flag_of_Portugal.svg',
    area: 92090,
    population: 10329506
  },
  {
    id: 5,
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    id: 6,
    name: 'Vietnam',
    flag: '2/21/Flag_of_Vietnam.svg',
    area: 331212,
    population: 95540800
  },
  {
    id: 7,
    name: 'Brazil',
    flag: '0/05/Flag_of_Brazil.svg',
    area: 8515767,
    population: 209288278
  },
  {
    id: 8,
    name: 'Mexico',
    flag: 'f/fc/Flag_of_Mexico.svg',
    area: 1964375,
    population: 129163276
  },
  {
    id: 9,
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    id: 10,
    name: 'India',
    flag: '4/41/Flag_of_India.svg',
    area: 3287263,
    population: 1324171354
  },
  {
    id: 11,
    name: 'Indonesia',
    flag: '9/9f/Flag_of_Indonesia.svg',
    area: 1910931,
    population: 263991379
  },
  {
    id: 12,
    name: 'Tuvalu',
    flag: '3/38/Flag_of_Tuvalu.svg',
    area: 26,
    population: 11097
  },
  {
    id: 13,
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];


interface Country {
  id: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}


interface State {
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

@Injectable({ providedIn: 'root' })
export class CountryService {
  private _search$ = new Subject<void>();
  private _countries$ = new BehaviorSubject<Country[]>([]);

  private _state: State = {
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe) {
    this._search$.pipe(
      tap((a) => console.log(a)),
      switchMap(() => this._search()),
      tap((a) => console.log(a)),
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

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<any> {
    const { sortColumn, sortDirection, searchTerm } = this._state;

    // 1. sort
    let countries = this.sort(COUNTRIES, sortColumn, sortDirection);

    // 2. filter
    countries = countries.filter(country => this.matches(country, searchTerm, this.pipe));

    // 3. paginate
    // countries = countries.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of(countries);
  }



  compare = (v1: string, v2: string) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

  matches(country: Country, term: string, pipe: PipeTransform) {
    return country.name.toLowerCase().includes(term.toLowerCase())
      || pipe.transform(country.area).includes(term)
      || pipe.transform(country.population).includes(term);
  }

  sort(rows: any[], column: SortColumn, direction: string): any[] {
    if (direction === '' || column === '') {
      return rows;
    } else {
      return [...rows].sort((a, b) => {
        const res = this.compare(`${a[column]}`, `${b[column]}`);
        return direction === 'asc' ? res : -res;
      });
    }
  }
}
