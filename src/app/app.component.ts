import { Component, OnInit } from '@angular/core';
import { Country } from './shared/model/country.model';
import { CountryService } from './shared/services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  name: string;
  showCountries: boolean;
  toggleMsg: string;
  countries: Country[];

  constructor(private countryService: CountryService) {

  }

  ngOnInit() {
    this.title = 'Nasa fake client database';
    this.name = 'Dennis';
    this.showCountries = true;
    this.toggleMsg = 'Hide list of countries';
    this.countries = this.countryService.getCountries();
  }

  toggleCountries() {
    this.showCountries
      ? this.toggleMsg = 'Show list of countries'
      : this.toggleMsg = 'Hide list of countries';
    this.showCountries = !this.showCountries;
  }

  addCountry(name: string, continent: string) {
    this.countryService.addCountry(name, continent);
  }
}
