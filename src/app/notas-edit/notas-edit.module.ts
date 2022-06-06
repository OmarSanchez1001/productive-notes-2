import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NotasEditComponent } from './notas-edit.component';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  declarations: [NotasEditComponent],
  exports: [NotasEditComponent]
})

export class NotasEditComponentModule {}