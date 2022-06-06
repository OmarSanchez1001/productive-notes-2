import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesEditPage } from './notes-edit.page';

const routes: Routes = [
  {
    path: '',
    component: NotesEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesEditPageRoutingModule {}
