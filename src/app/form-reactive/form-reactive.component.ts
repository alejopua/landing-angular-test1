import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css'],
})
export class FormReactiveComponent implements OnInit {
  formContact: FormGroup;
  userName: string = 'Peter';

  constructor(private form: FormBuilder) {
    this.formContact = this.form.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.formContact.get('name')?.setValue(this.userName);
    this.formContact.get('name')?.disable();
  }

  statusValue(controlName: string) {
    return this.formContact.get(controlName)?.status === 'VALID';
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.formContact.get(controlName)?.touched &&
      this.formContact.get(controlName)?.hasError(errorType)
    );
  }

  submitForm() {
    console.log(this.formContact);
  }
}
