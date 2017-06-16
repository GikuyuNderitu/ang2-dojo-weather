import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeather(loc: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${loc},us&APPID=d27b7ea199c8a361743f9826bf8da8f5`)
    .map((response: Response) => response.json()).toPromise();
  }

}
