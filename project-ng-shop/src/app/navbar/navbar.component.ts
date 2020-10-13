import { ThrowStmt } from '@angular/compiler';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs/index';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn;
  isAdmin;
  
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.isLoggedIn.subscribe((value: boolean) => {
      this.isLoggedIn = value;
    });
    
    this.auth.isAdmin.subscribe((value: boolean) => {
      this.isAdmin = value;
    });
  }

  get username() {
    return this.auth.user$.displayName; 
  }

  logout() {
    this.auth.logout();
  }

}
