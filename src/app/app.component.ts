import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    like:number=0;
    dislike:number=0;
   li(){
    this.like++;
   }
   di(){
    this.dislike++;
   }
}
