import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularassignments2';
   ar = ['praveen','sanju','hari','prasad']
   fun(i:any){
    alert("id"+i)


   }
}
