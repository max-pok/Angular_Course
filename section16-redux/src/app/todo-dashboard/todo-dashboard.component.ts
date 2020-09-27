import { select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { IAppState } from '../store';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {
  // Read the comment in TodoService
  constructor(public service: TodoService) { 
  
  }

  clearTodos(): void{
    this.service.clearTodos();
  }
}
