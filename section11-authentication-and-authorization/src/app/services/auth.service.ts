import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
  _currentUser: any; 

  constructor(private http: Http) {
  }

  login(credentials) {    
    return this.http.post('/api/authenticate', JSON.stringify(credentials)).pipe(
      map(response => {        
        if (response && response['_body']) {
          localStorage.setItem('token', response['_body']);
          return true;
        } 
        return false;
      })
    );
  }

  logout() { 
    localStorage.removeItem('token');
  }

  isLoggedIn() {    
    return !(new JwtHelperService().isTokenExpired(localStorage.getItem('token')));
  }

  get currentUser() {
    let token = localStorage.getItem('token');
    if (!token) return null;
    return new JwtHelperService().decodeToken(token);
  }
}

