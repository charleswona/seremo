import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { BusinessComponent } from './views/business/business.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'business', component: BusinessComponent },
  { path: '*', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
