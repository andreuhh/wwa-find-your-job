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

  selectedExperience: any = '';
  selectedExperienceValue: any = '';
  selectedCategorie: any = '';
  selectedCategorieValue: any = '';

  //data: Array<any>
  jobData: any
  jobResults: Array<any>
  companiesData: Array<any>

  //constructor(private _getJobDataService: GetJobDataService) { }

  constructor(
    private getJobDataService: GetJobDataService,
    private http: HttpClient
  ) {
    this.jobData = new Object()
    this.jobResults = new Array<any>()

  }

  ngOnInit(): void {
    this.getDataFromApi();

    this.getDataCompaniesFromApi();
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
      'https://www.themuse.com/api/public/jobs?page=' + this.pagination + '&category=' + this.selectedCategorie + '&level=' + this.selectedExperience + '&location=' + this.cityTerm
    );
  }

  getDataFromApi() {
    this.getJobData().subscribe((data) => {
      this.jobData = data;
      console.log(this.jobData)
      this.jobResults = data.results
      console.log(this.jobResults)

      if (this.catDropdownOpen) {
        this.catDropdownOpen = false
      }

      if (this.expDropdownOpen) {
        this.expDropdownOpen = false
      }
    })
  }

  radioChangeHandlerExpLev(event: any) {
    this.expDropdownOpen = false
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
  }

  radioChangeHandlerCategories(event: any) {
    this.catDropdownOpen = false
    this.selectedCategorie = event.target.value;
    this.selectedCategorieValue = event.target.value;

    if (this.selectedCategorieValue === 'Creative & Design') {
      this.selectedCategorie = 'Creative%20%26%20Design'
    }

    if (this.selectedCategorieValue === 'Data Science') {
      this.selectedCategorie = 'Data%20Science'
    }

    if (this.selectedCategorieValue === 'Management') {
      this.selectedCategorie = 'Project%20%26%20Product%20Management'
    }
  }

  handleCatDropdown() {
    this.catDropdownOpen = !this.catDropdownOpen
    if (this.expDropdownOpen) {
      this.expDropdownOpen = false
    }
  }
  handleExpDropdown() {
    if (this.catDropdownOpen) {
      this.catDropdownOpen = false
    }
    this.expDropdownOpen = !this.expDropdownOpen
  }

  getCompaniesData(): Observable<any> {
    return this.http.get<any>(
      //'https://www.themuse.com/api/public/companies?page=1'
      'https://www.themuse.com/api/public/companies/11778'
    );
  }

  getDataCompaniesFromApi() {
    this.getCompaniesData().subscribe((d) => {
      this.companiesData = d
      console.log('compa')
      console.log(this.companiesData)
      console.log('compa')
    })
  }
}
