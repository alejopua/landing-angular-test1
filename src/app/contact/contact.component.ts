import { Component } from '@angular/core';

// TEMPLETE DRIVEN FORM
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  public user: any = {
    name: '',
    email: '',
  };

  submitForm() {
    console.log(this.user);
  }
}
