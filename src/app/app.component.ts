import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularassignments2';
  arr:number=0;
  brr:number=0;
  total:number=0;
  click(){
    this.total=this.arr-this.brr;
  }
}
