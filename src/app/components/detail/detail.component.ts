import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { expLevels } from '../../utils/expLev';
import { categories } from '../../utils/categories';
import { Observable } from 'rxjs'


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detailJobResults: any

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {
    this.detailJobResults = new Object()
  }

  id
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id)
    //this.detail = this.detailService.getDetail(id)
    this.getDataFromApi()
  }

  getDetailData(): Observable<any> {
    return this.http.get<any>(
      'https://www.themuse.com/api/public/jobs/' + this.id
    );
  }

  getDataFromApi() {
    this.getDetailData().subscribe((data) => {
      this.detailJobResults = data;
      console.log(this.detailJobResults)
    })
  }

}
