import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotesEditPageRoutingModule } from './notes-edit-routing.module';

import { NotesEditPage } from './notes-edit.page';
import { NotasEditComponentModule } from '../notas-edit/notas-edit.module';
import { NotasComponentModule } from '../notas/notas.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotesEditPageRoutingModule,
    NotasComponentModule,
    NotasEditComponentModule
  ],
  declarations: [NotesEditPage]
})
export class NotesEditPageModule {}
