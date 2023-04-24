import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularassignments2';
  multiDimArray: number[][] = [[1, 2], [3, 4, 5], [6]];
flattenedArray: number[] = [];

ngOnInit() {
  this.flattenedArray = this.multiDimArray.flat();
}
}
