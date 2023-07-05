import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { AnimalsComponent } from './animals/animals.component';
import { CountriesComponent } from './countries/countries.component';
import { IssComponent } from './iss/iss.component';
import { AccountlogginComponent } from './accountloggin/accountloggin.component';
import { IssmapComponent } from './issmap/issmap.component';

const routes: Routes = [
  { path: '', component: MainComponentComponent },
  { path: 'animals', component: AnimalsComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'iss', component: IssComponent },
  { path: 'accountLoggin', component: AccountlogginComponent },
  { path: 'issmap', component: IssmapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
