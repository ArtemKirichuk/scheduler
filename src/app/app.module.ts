import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './slider/slider.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TaskComponent } from './task/task.component';
import { MaterialModule } from './material/material.module';
import { datePipe } from './pipe.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CalendarComponent,
    TaskComponent,
    datePipe,
    
  ],
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
