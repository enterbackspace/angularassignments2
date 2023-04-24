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
      age:40
    },
    {
      firstname:"Rohit",
      lastname:"Sharma",
      age:35
    },
    {
      firstname:"Sachin",
      lastname:"Tendulkar",
      age:50
    },
]
}
