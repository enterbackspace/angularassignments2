import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularassignments2';
  valueString:any[]=[]
  clickme(){
    console.log(this.valueString)
  }
}
