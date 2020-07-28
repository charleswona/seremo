import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layourts/header/header.component';
import { FooterComponent } from './layourts/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { BusinessComponent } from './views/business/business.component';
import { SecurityComponent } from './views/security/security.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BusinessComponent,
    SecurityComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
