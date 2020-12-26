//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inputContent: string;
  constructor() { }

  ngOnInit(): void {
    //this.inputContent = 'Milano';
    //this.http.get('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1').subscribe(res => { this.testo = res[0]; });
  }

}
