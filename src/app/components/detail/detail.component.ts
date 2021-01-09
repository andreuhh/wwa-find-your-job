import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id
  detailJobResults: any
  isError = false

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {
    this.detailJobResults = new Object()
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    //this.detail = this.detailService.getDetail(id)
    this.getDataFromApi()
  }

  getDetailData(): Observable<any> {
    return this.http.get<any>(
      'https://www.themuse.com/api/public/jobs/' + this.id
    );
  }

  getDataFromApi() {
    try {
      this.getDetailData().subscribe((data) => {
        this.detailJobResults = data;
        console.log(this.detailJobResults)
        console.log(this.isError)
      })
    }
    catch (error) {
      this.isError = true
      console.error(error);
    }
  }
}
