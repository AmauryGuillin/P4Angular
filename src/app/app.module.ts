import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AnimalsComponent } from './animals/animals.component';
import { CountriesComponent } from './countries/countries.component';
import { IssComponent } from './iss/iss.component';
import { CountryComponent } from './country/country.component';
import { AccountlogginComponent } from './accountloggin/accountloggin.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    HeaderComponent,
    FooterComponent,
    AnimalsComponent,
    CountriesComponent,
    IssComponent,
    CountryComponent,
    AccountlogginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
