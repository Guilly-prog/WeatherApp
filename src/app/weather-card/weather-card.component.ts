import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  condition = 'sunny';
  currentTemp = '20';
  minTemp = '1';
  maxTemp = '50';

  darkMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  openDetails() {
    console.log('clicked');
  }

}
