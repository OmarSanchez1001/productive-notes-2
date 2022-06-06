import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-notas-edit',
  templateUrl: './notas-edit.component.html',
  styleUrls: ['./notas-edit.component.scss'],
})
export class NotasEditComponent implements OnInit {
  @ViewChild('editForm') editForm: FormGroupDirective;

  constructor(
    private modalController: ModalController,
    private dataService: DataService
  ) { }

  @Input() id: any;

  editNoteForm: FormGroup;
  subscribe1: Subscription;
  subscribe2: Subscription;
  note: any;
  isEdited = false;

  ngOnInit() {
    this.subscribe1 = this.dataService.getNotebyId(this.id)
      .subscribe(note => {
        if(!note){
          this.close();
        } else {
          //Editar contenido de la nota
          this.note = note;
          this.editNoteForm = new FormGroup({
            'date': new FormControl(this.note.date, Validators.required),
            'title': new FormControl(this.note.title, Validators.required),
            'content': new FormControl(this.note.content, Validators.required)
          });

          this.subscribe2 = this.editNoteForm.valueChanges.subscribe(values => {
            this.isEdited = true;
          })

        }
      });
  }

  submitForm(){
    this.editForm.onSubmit(undefined);
  }

  editNote(value: any){
    let editedNote = { id: this.note.id, ...value };
    console.log("Nota modificada");
    this.dataService.editNote(editedNote).then(res => this.close());
  }

  close() {
    this.modalController.dismiss();
  }

}
