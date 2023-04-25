import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentTime:any;

  ngOnInit() {
    setInterval(() => {
      const date = new Date();
      this.currentTime = date.toLocaleTimeString();
    }, 1000);
  }
}
