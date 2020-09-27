import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  // Read the comment in TodoService
  constructor(public service: TodoService) { 
  }

  addTodo(input): void {
    if (!input.value) {
      return;
    } 

    this.service.addTodo(input.value);

    input.value = '';
  }

  toggleTodo(todo): void {
    this.service.toggleTodo(todo);
  }

  removeTodo(todo): void {
    this.service.removeTodo(todo);
  }
}
