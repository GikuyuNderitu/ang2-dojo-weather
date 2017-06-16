import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { WeatherService } from './services/weather.service';
import { PictureService } from './services/picture.service';
import { LocationDetailComponent } from './location/location-detail/location-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    LocationDetailComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    WeatherService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
