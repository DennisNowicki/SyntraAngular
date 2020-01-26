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

  countries: Country[];

  constructor() {}

  ngOnInit() {
    this.title = 'Nasa fake client database';
    this.name = 'Dennis';
    this .countries = [
      new Country(1, 'Belgium', 'Europe'),
      new Country(2, 'US', 'America'),
      new Country(3, 'Japan', 'Asia'),
      new Country(4, 'Brazil', 'America')
    ];

  }
}
