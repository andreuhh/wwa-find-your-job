import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class GetJobDataService {

  //private _url: string = 'https://jsonplaceholder.typicode.com/posts'
  //private _url: string = 'https://www.themuse.com/api/public/jobs?page=10&descending=true'

  //private _url: string = 'https://www.themuse.com/api/public/jobs?category=Engineering&page=5&location=Italy'
  /*private _urlCompanies: string = 'https://www.themuse.com/api/public/companies?page=1' // get companies data

  constructor(private http: HttpClient) { }

  getCompaniesData(): Observable<any> {
    return this.http.get<any>(this._urlCompanies);
  }*/
}
