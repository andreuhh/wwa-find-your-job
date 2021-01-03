import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetJobDataService } from '../../services/get-job-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inputContent: string;

  //data: Array<any>
  jobData: any
  jobResults: Array<any>

  //constructor(private _getJobDataService: GetJobDataService) { }

  constructor(private getJobDataService: GetJobDataService) {
    this.jobData = new Object()
    this.jobResults = new Array<any>()

    /*this.http.get('https://www.themuse.com/api/public/jobs?page=10&descending=true')
      .toPromise()
      .then(data => console.log(data))*/

  }

  ngOnInit(): void {

  }

  getDataFromApi() {
    this.getJobDataService.getJobData().subscribe((data) => {
      console.log(data)
      this.jobData = data;
      this.jobResults = data.results
      console.log(this.jobResults)
      console.log(this.jobData.page)
    })
  }
}
