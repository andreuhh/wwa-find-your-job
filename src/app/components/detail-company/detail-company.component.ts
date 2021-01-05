import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.scss']
})
export class DetailCompanyComponent implements OnInit {
  id
  detailCompanyData: any

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {
    this.detailCompanyData = new Object()
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id)
    //this.detail = this.detailService.getDetail(id)
    this.getDataFromApi()
  }

  getDetailCompanyData(): Observable<any> {
    return this.http.get<any>(
      'https://www.themuse.com/api/public/companies/' + this.id
    );
  }

  getDataFromApi() {
    this.getDetailCompanyData().subscribe((data) => {
      this.detailCompanyData = data;
      console.log(this.detailCompanyData)
    })
  }

}
