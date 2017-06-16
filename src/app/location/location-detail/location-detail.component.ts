import { Component, OnInit, Input } from '@angular/core';

import { WeatherDetail } from '../detail';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.sass']
})
export class LocationDetailComponent implements OnInit {
  private _data: WeatherDetail;
  private _src: string;
  private _pixel: number = 0;

  @Input()
  set data(weatherData) {
    this._data = weatherData;
    this.resetPicture()
  }

  constructor() { }

  ngOnInit() {
  }

  resetPicture() {
    this._pixel += this._pixel < 0 ? 1 : -1;
    this._src = `http://lorempixel.com/${400 + this._pixel}/${400 + this._pixel}/city/`;
  }

}
