import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyData } from '../myData';
//import {Observable} from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class GetJobDataService {

  /*private _url: string = 'https://www.themuse.com/api/public/jobs'
  constructor(private http: HttpClient) { }

  getJobData(): Observable<MyData[]>{
    return this.http.get<MyData[]>(this._url);
  }*/
}
