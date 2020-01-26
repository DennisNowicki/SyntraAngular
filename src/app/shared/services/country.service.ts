import { Injectable } from '@angular/core';
import { Country } from '../model/country.model';

@Injectable({
  providedIn: 'root'
})

export class CountryService {
  private countries = [
    new Country(1, 'Belgium', 'Europe'),
    new Country(2, 'US', 'America'),
    new Country(3, 'Japan', 'Asia'),
    new Country(4, 'Brazil', 'America')
  ];

  constructor() { }

  getCountries(): Country[] {
    return this.countries;
  }

  getCountry(id: number): Country {
    return this.countries.find(c => c.id === id);
  }

  addCountry(name: string, continent: string) {
    this.countries.push(new Country(this.countries.length + 1, name, continent));
  }
}
