import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { CalendarioComponent } from './calendario.component';

@NgModule({
  declarations: [
    CalendarioComponent
  ],
  imports: [
    MbscModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  exports: [
    CalendarioComponent
  ]
})
export class AppModule { }