import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRouting } from './app.routing';
import { MapLoaderService } from './services/map-loader/map-loader.service';
import { MapGeneratorService } from './services/map-generator/map-generator.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,    
    appRouting
  ],
  providers: [MapLoaderService, MapGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
