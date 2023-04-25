import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public time = 0;
  public running = false;
  start() {
    this.running = true;
    setTimeout(() => {
      if (this.running) {
        this.time++;
        this.start();
      }
    },1000);
  }

  stop() {
    this.running = false;
  }

  reset() {
    this.time = 0;
    this.running = false;
  }

}
