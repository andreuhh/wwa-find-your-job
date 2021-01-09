import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  cityTerm = 'Italy';
  pagination = 1;
  elementsPerPage = 5

  expLevels = expLevels;
  categories = categories;

  catDropdownOpen = false;
  expDropdownOpen = false;

  selectedExperience: any = '';
  selectedExperienceValue: any = '';
  selectedCategorie: any = 'Engineering';
  selectedCategorieValue: any = '';

  //data: Array<any>
  jobData: any
  jobResults: Array<any>


  constructor(
    private getJobDataService: GetJobDataService,
    private http: HttpClient,
    private router: Router
  ) {
    this.jobData = new Object()
    this.jobResults = new Array<any>()

  }

  ngOnInit(): void {
    this.getDataFromApi();
  }

  //private _url: string = 'https://www.themuse.com/api/public/jobs?category=' + this.jobTerm + '&page=1&location=' + this.cityTerm

  incrementPagination() {
    this.pagination++;
    if (this.pagination + 1 > this.jobData.page_count) {
      this.pagination = 1;
    }
    this.getDataFromApi();
  }

  decrementPagination() {
    this.pagination--;
    if (this.pagination - 1 < 1) {
      this.pagination = this.jobData.page_count - 1;
    }
    this.getDataFromApi();
  }

  handleElementsInPage(event: any) {
    this.elementsPerPage = event.target.value
    if (event.target.value === '5') {
      this.elementsPerPage = 5
    } else if (event.target.value === '10') {
      this.elementsPerPage = 10
    } else if (event.target.value === '20') {
      this.elementsPerPage = 20
    }
    this.getDataFromApi()
  }

  getJobData(): Observable<any> {
    return this.http.get<any>(
      'https://www.themuse.com/api/public/jobs?page=' + this.pagination + '&category=' + this.selectedCategorie + '&level=' + this.selectedExperience + '&location=' + this.cityTerm
    );
  }


  getDataFromApi() {
    try {
      this.getJobData().subscribe((data) => {
        console.log('ciao')
        console.log(this.jobData.items_per_page)
        console.log('ciao')
        this.jobData = data;

        this.jobResults = data.results
        this.jobResults.length = this.elementsPerPage



        console.log(this.jobData)

        if (this.catDropdownOpen) {
          this.catDropdownOpen = false
        }

        if (this.expDropdownOpen) {
          this.expDropdownOpen = false
        }
      })
    }
    catch (error) {
      console.error(error);
    }
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

  // go from buttom to card section when change page
  onScrollTop(event) {
    window.scroll(0, 1000);
  }

}
