import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
  import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LineChartComponent } from './hello.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ChartsModule ],
  declarations: [ AppComponent, LineChartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
