import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetJobDataService } from '../../services/get-job-data.service';

import { Observable } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inputContent: string;
  jobTerm = 'Sales';
  cityTerm = 'NewYork';
  pagination = 1;

  //data: Array<any>
  jobData: any
  jobResults: Array<any>

  //constructor(private _getJobDataService: GetJobDataService) { }

  constructor(private getJobDataService: GetJobDataService, private http: HttpClient) {
    this.jobData = new Object()
    this.jobResults = new Array<any>()

    /*this.http.get('https://www.themuse.com/api/public/jobs?category=Engineering&page=5&location=Italy')
      .toPromise()
      .then(data => console.log(data))*/

  }

  ngOnInit(): void {
    this.getDataFromApi();
  }

  //private _url: string = 'https://www.themuse.com/api/public/jobs?category=' + this.jobTerm + '&page=1&location=' + this.cityTerm

  incrementPagination() {
    this.pagination += 1;
    this.getDataFromApi();
  }

  decrementPagination() {
    this.pagination -= 1;
    this.getDataFromApi();
  }

  getJobData(): Observable<any> {
    return this.http.get<any>('https://www.themuse.com/api/public/jobs?category=' + this.jobTerm + '&page=' + this.pagination + '&location=' + this.cityTerm);
  }

  getDataFromApi() {
    this.getJobData().subscribe((data) => {
      this.jobData = data;
      console.log(this.jobData)
      this.jobResults = data.results
      console.log(this.jobResults)

      if (this.jobTerm) {
        console.log(this.jobTerm)
      }

      if (this.cityTerm) {
        console.log(this.cityTerm)
      }

    })
  }
}
