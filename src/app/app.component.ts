import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value1:number = 0;
  value2:number = 0;
  total:number=0;
  
  click(){
  this.total=this.value1+this.value2

  }
}
