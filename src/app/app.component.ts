import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularassignments2';
  tasks = [
    {
      title: 'Task 1',
      description: 'Do something',
      status: 'Incomplete',
    },
    {
      title: 'Task 2',
      description: 'Do something else',
      status: 'Complete',
    },
    {
      title: 'Task 3',
      description: 'Do another thing',
      status: 'Incomplete',
    }, {
      title: 'Task 4',
      description: 'Do another thing',
      status: 'Incomplete',
    }, {
      title: 'Task 5',
      description: 'Do another thing',
      status: 'complete',
    }, {
      title: 'Task 6',
      description: 'Do another thing',
      status: 'Incomplete',
    },
  ];  
}
