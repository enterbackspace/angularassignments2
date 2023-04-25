import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = ['Buy groceries', 'Walk the dog', 'Clean the house'];
  newTodo:any;

  addTodo() {
    if (this.newTodo !== 0) {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    }
  }

  delete(todo: string) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
