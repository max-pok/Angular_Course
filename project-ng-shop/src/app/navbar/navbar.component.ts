import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = this.auth.user$ != null ? true : false;
    console.log(this.auth.user$);
  }

  logout() {
    this.auth.logout().then(() => {
      this.router.navigate(['/home']);
      this.isLoggedIn = false;
    });
  }

}
