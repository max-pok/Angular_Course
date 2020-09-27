import { INCREMENT } from './actions';
import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { IAppState } from './store';
import { Map } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Section 16: Redux';

  constructor() {
  }
}
