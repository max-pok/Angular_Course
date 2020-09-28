
import { OnInit } from '@angular/core';
import { TodoService } from './todo.service';

export class TodosComponent implements OnInit { 
  todos: any = [];
  message; 

  constructor(private service: TodoService) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() { 
    this.service.getTodos().subscribe(t => this.todos = t);
  }

  add() { 
    const newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err);
  }

  delete(id) {
    if (confirm('Are you sure?')) {
      this.service.delete(id).subscribe();
    }
  }  
}
