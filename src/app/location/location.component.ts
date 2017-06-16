import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { WeatherDetail } from './detail';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.sass']
})
export class LocationComponent implements OnInit {
  location: string;
  weather: WeatherDetail;

  constructor(
    private _route: ActivatedRoute,
    private _ws: WeatherService) { 
    this._route.params.subscribe(this.getWeather.bind(this));
  }

  ngOnInit() {
  }

  getWeather(param) {
    this.setLocation(param.city);

    this._ws.getWeather(param.city)
    .then(data => {
      console.log(data);
      this.weather = new WeatherDetail(
        data.main.humidity,
        data.main.temp_max,
        data.main.temp_min,
        data.main.temp,
        data.weather[0].description)
    })
    .catch(err => console.error(err))
  }

  setLocation(city: string) : void {
    switch(city) {
      case 'dc':
        this.location = "Washington, D.C.";
        break;

      case 'seattle':
        this.location = "Seattle, WA";
        break;
      
      case 'sanjose':
        this.location = "San Jose, CA";
        break;

      case 'chicago':
        this.location = "Chicago, IL";
        break;
      
      case 'dallas':
        this.location = "Dallas, TX";
        break;

      case 'burbank':
        this.location = "Burbank, CA";
        break;
    }
  }

}
