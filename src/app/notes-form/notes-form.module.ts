import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotesFormPageRoutingModule } from './notes-form-routing.module';

import { NotesFormPage } from './notes-form.page';
import { NotasFormComponentModule } from '../notas-form/notas-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotesFormPageRoutingModule,
    NotasFormComponentModule
  ],
  declarations: [NotesFormPage]
})
export class NotesFormPageModule {}
