import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { CLEAR_ALL } from '../action';
import { ITaskingState } from '../store';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {
  @select(s => s.tasking.list) todos; 
  @select(s => s.tasking.lastUpdated) lastUpdate; 
  
  constructor(private ngRedux: NgRedux<ITaskingState>) {
  }

  clearTodos() {
    this.ngRedux.dispatch({ type: CLEAR_ALL });
  }
}
