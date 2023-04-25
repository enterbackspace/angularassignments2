import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularassignments2';
    students = [
    {
      firstname:"Praveen",
      lastname:"Gubbala",
      age:40,
      gender:"male"
    },
    {
      firstname:"Smrithi",
      lastname:"mandana",
      age:25,
      gender:'female'
    },
    {
      firstname:"mithali",
      lastname:"raj",
      age:39,
      gender:'female'
    },
    {
      firstname:"Rohit",
      lastname:"Sharma",
      age:35,
      gender:'male'
    },
    {
      firstname:"Sachin",
      lastname:"Tendulkar",
      age:50,
      gender:'male'
    },
]
}
