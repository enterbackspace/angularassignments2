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
    },]
     maleimage="https://i.pinimg.com/736x/2a/4e/8d/2a4e8dab6791ed643d5180bc72167f6d.jpg";
      femaleimage="https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_640.png";
}
