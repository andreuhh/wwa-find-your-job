import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { DetailCompanyComponent } from './components/detail-company/detail-company.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'detail-company/:id', component: DetailCompanyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, DetailComponent]