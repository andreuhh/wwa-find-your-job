import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyData } from '../myData';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class GetJobDataService {

  private _url: string = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) { }

  getJobData(): Observable<any> {
    return this.http.get<any>(this._url);
  }
}
