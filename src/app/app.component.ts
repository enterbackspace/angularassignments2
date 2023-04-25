import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularassignments2';
  filledStars: string;

  constructor() {
    const num = 5;  
    this.filledStars = '';
    for (let i = 0; i < num; i++) {
      this.filledStars += '*';
    }
  }

  
}
