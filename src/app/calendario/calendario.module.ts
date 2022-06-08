import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarioComponent } from './calendario.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    CalendarioComponent
  ],
  imports: [ 
    MbscModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    CommonModule
  ],
  exports: [
    CalendarioComponent
  ],
  bootstrap: [CalendarioComponent]
})
export class AppModule { }