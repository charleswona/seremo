import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { BusinessComponent } from './views/business/business.component';
import { SecurityComponent } from './views/security/security.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { ProductComponent } from './views/product/product.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'product', component: ProductComponent },
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
