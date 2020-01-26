import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  name: string;

  countries: string[];

  constructor() {}

  ngOnInit() {
    this.title = 'Nasa fake client database';
    this.name = 'Dennis';
    this .countries = [ 'US' , 'Belgium' , 'Mozambique' , 'Antartica' ];

  }
}
