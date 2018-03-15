import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PapaParseModule } from 'ngx-papaparse';
import { RouterModule, Routes } from '@angular/router';
//import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { HomeComponent } from './app.component';
import { graphViewComponent } from './graphView.component'
import { ChartModule } from 'angular2-highcharts';

const appRoutes: Routes = [
   { path: 'showGraph/:id', component: graphViewComponent },
];
declare var require : any;

@NgModule({
  declarations: [
    HomeComponent,
    graphViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PapaParseModule,
    RouterModule.forRoot(appRoutes),
    ChartModule.forRoot(require('highcharts'))

  ],
  providers: [

  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
