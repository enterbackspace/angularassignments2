import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onClick(event: MouseEvent){
      const xPosition = event.clientX;
      const yPosition = event.clientY;
      console.log(`Clicked at (${xPosition}, ${yPosition})`);
    }
  
}
