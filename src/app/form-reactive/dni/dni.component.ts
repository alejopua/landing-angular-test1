import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css'],
})
export class DniComponent implements OnChanges {
  formDni: FormGroup;
  @Input() typeDni: string = 'DNI';

  constructor(private form: FormBuilder) {
    this.formDni = this.form.group({
      dni: [''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes?.['typeDni'].currentValue);
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.formDni.get(controlName)?.touched &&
      this.formDni.get(controlName)?.hasError(errorType)
    );
  }

  statusValue(controlName: string) {
    return this.formDni.get(controlName)?.status === 'VALID';
  }
}
