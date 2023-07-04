import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../models/country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  countries!: Country[];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.fetchCountriesData();
  }

  fetchCountriesData(): void {
    this.countriesService.getCountriesTest().subscribe({
      next: (data: Country[]) => {
        this.countries = data;
      },
      error: (error) => {
        throw new Error(
          `Erreur lors de la récupération des données : ${error}`
        );
      },
    });
  }
}
