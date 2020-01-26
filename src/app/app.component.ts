import { Component, OnInit } from '@angular/core';
import { Country } from './shared/model/country.model';

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

  constructor() {
    this.countries = [
      new Country(1, 'Belgium', 'Europe'),
      new Country(2, 'US', 'America'),
      new Country(3, 'Japan', 'Asia'),
      new Country(4, 'Brazil', 'America')
    ];
  }

  ngOnInit() {
    this.title = 'Nasa fake client database';
    this.name = 'Dennis';
    this.showCountries = true;
    this.toggleMsg = 'Hide list of countries';
  }

  toggleCountries() {
    this.showCountries
      ? this.toggleMsg = 'Show list of countries'
      : this.toggleMsg = 'Hide list of countries';
    this.showCountries = !this.showCountries;
  }

  addCountry(name: string, continent: string) {
    this.countries.push(new Country((this.countries.length + 1), name , continent ));
  }
}
