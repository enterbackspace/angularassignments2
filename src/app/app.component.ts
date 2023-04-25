import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onClick(text:any) {
    console.log(`Clicked on div with text: ${text}`);
  }
}
