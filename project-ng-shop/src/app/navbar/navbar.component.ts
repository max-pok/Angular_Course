import { ThrowStmt } from '@angular/compiler';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.isLoggedIn.subscribe((value: boolean) => {
      this.isLoggedIn = value;
    });
  }

  get username() {
    return this.auth.user$.displayName;
  }

  logout() {
    this.auth.logout().then(() => {
      this.isLoggedIn = false;
      this.router.navigate(['']);
    });
  }

}
