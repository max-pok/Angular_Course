import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  loginViaGoogle() {
    this.auth.loginViaGoogle();
  }

}
