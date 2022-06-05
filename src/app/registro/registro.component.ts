import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [FormBuilder]
})
export class RegistroComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
    private readonly dataService: DataService
  ) { }

  form: FormGroup;
  isSubmitted = false;

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    });
  }

  submitForm(){
    this.isSubmitted = true;
    if(!this.form.valid){
      console.log("Favor de rellenar todos los campos");
      return false;
    } else {
      this.dataService.createUser(this.form.value);
      console.log("Listo!");
      this.form.reset();
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key).setErrors(null);
      });
    }
  }

}
