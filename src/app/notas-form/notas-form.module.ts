import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NotasFormComponent } from './notas-form.component';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  declarations: [NotasFormComponent],
  exports: [NotasFormComponent]
})
export class NotasFormComponentModule {}