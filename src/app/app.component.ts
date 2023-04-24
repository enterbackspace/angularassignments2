import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularassignments2';
  arr=['Babu','edupoly','Naveen','Sravan']
  reverseArray: string[] = this.arr.map(str => str.split('').reverse().join(''));
}
