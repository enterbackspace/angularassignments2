import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      checkbox1: new FormControl( '',),
      checkbox2: new FormControl(''),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
