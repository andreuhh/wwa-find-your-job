import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetJobDataService } from '../../services/get-job-data.service';
import { expLevels } from '../../utils/expLev';
import { categories } from '../../utils/categories';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inputContent: string;
  //jobTerm = 'Engineering';
  cityTerm = 'Italy';
  pagination = 1;

  expLevels = expLevels;
  categories = categories;

  catDropdownOpen = false;
  expDropdownOpen = false;

  handleCatDropdown() {
    this.catDropdownOpen = !this.catDropdownOpen
    console.log(this.catDropdownOpen)
  }
  handleExpDropdown() {
    this.expDropdownOpen = !this.expDropdownOpen
    console.log(this.expDropdownOpen)
  }

  selectedExperience: any = '';
  selectedExperienceValue: any = '';
  selectedCategorie: any = '';

  //data: Array<any>
  jobData: any
  jobResults: Array<any>

  //constructor(private _getJobDataService: GetJobDataService) { }

  constructor(
    private getJobDataService: GetJobDataService,
    private http: HttpClient
  ) {
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
    if (this.pagination + 1 > this.jobData.page_count) {
      this.pagination = 1;
    }
    this.getDataFromApi();
  }

  decrementPagination() {
    this.pagination -= 1;
    if (this.pagination - 1 < 1) {
      this.pagination = this.jobData.page_count;
    }
    this.getDataFromApi();
  }

  getJobData(): Observable<any> {
    return this.http.get<any>(
      'https://www.themuse.com/api/public/jobs?category=' + this.selectedCategorie + '&level=' + this.selectedExperience + '&page=' + this.pagination + '&location=' + this.cityTerm
    );
  }

  getDataFromApi() {
    this.getJobData().subscribe((data) => {
      this.jobData = data;
      console.log(this.jobData)
      this.jobResults = data.results
      console.log(this.jobResults)

      if (this.cityTerm) {
        console.log(this.cityTerm)
      }

    })
  }

  radioChangeHandlerExpLev(event: any) {
    this.selectedExperienceValue = event.target.value;
    if (this.selectedExperienceValue === 'Senior') {
      this.selectedExperience = 'Senior%20Level'
    }
    if (this.selectedExperienceValue === 'Mid') {
      this.selectedExperience = 'Mid%20Level'
    }
    if (this.selectedExperienceValue === 'Entry') {
      this.selectedExperience = 'Entry%20Level'
    }
    console.log(this.selectedExperience)
  }

  radioChangeHandlerCategories(event: any) {
    this.selectedCategorie = event.target.value;

    console.log(this.categories)
  }
}
