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

  public jobData = [];

  //constructor(private _getJobDataService: GetJobDataService) { }

  constructor(private http: HttpClient) {
    this.http.get('https://www.themuse.com/api/public/jobs?page=10&descending=true')
      .toPromise()
      .then(data => console.log(data))

  }

  ngOnInit(): void {
    //this.inputContent = 'Milano';
    //this.http.get('https://www.themuse.com/api/public/jobs').subscribe(res => { this.testo = res[0]; });
    //console.log(this.testo)

    //this._getJobDataService.getJobData()
    //  .subscribe(data => this.jobData = data);
  }

}
