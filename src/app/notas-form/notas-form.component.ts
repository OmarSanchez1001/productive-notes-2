import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-notas-form',
  templateUrl: './notas-form.component.html',
  styleUrls: ['./notas-form.component.scss'],
  providers: [FormBuilder]
})
export class NotasFormComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
    private readonly dataService: DataService
  ) { }

  form: FormGroup;
  isSubmitted = false;

  ngOnInit() {
    this.form = this.formBuilder.group({
      date: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      content: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]]
    });
  }

  submitForm(){
    this.isSubmitted = true;
    if(!this.form.valid){
      console.log("Favor de rellenar todos los campos");
      return false;
    } else {
      this.dataService.createNote(this.form.value);
      console.log("Listo!");
      this.form.reset();
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key).setErrors(null);
      });
    }
  }

}
