import { IAppState } from './../store';
import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @select((s): IAppState => s.cart.count) count;

  constructor(public auth: AuthService) {
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

}
