import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
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

  loginWithGoogle() {
    this.auth.loginViaGoogle().finally(() => {
      console.log('ok');
    });
  }

}
