import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public seconds: number = 0;
  public minutes: number = 0;
  public hours: number = 0;
  timer:any

  constructor() {

  }

  ngOnInit() {}

  start() {
    this.timer = interval(1000).subscribe(() => {
      this.seconds++;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
        if (this.minutes === 60) {
          this.minutes = 0;
          this.hours++;
        }
      }
    });
  }

  stop() {
    this.timer.unsubscribe();
  }

  reset() {
    this.timer.unsubscribe();
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
  }
}
