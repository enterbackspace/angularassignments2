import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularassignments2';
  num1:number=0;
  num2:number=0;
  mul:number=0;
  div:number=0;
  muli(){
this.mul=this.num1*this.num2
  }
  divi(){
this.div=this.num1/this.num2

  
  }
}
