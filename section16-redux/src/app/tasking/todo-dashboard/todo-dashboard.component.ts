import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store'; 
import { CLEAR_ALL } from '../../actions'; 

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {
  @select('list') todos; 
  @select('lastUpdated') lastUpdate; 
  
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  clearTodos() {
    this.ngRedux.dispatch({ type: CLEAR_ALL });
  }
}
