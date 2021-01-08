import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HomeComponent } from './components/home/home.component';
//import { DetailComponent } from './components/detail/detail.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailCompanyComponent } from './components/detail-company/detail-company.component';

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    //DetailComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    DetailCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
