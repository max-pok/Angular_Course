import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app'; // It will not throw any warning

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: firebase.User;

  constructor(private afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user$ = user;
        localStorage.setItem('user', JSON.stringify(this.user$));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  loginViaGoogle() {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(result => {
      this.user$ = result.user;
      console.log(this.user$);
      
      localStorage.setItem('user', JSON.stringify(this.user$));

      // add user to database
    })
    .catch(error => {
      console.log(error);
    });
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      localStorage.setItem('user', null);
    });
  }

}
