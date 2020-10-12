import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app'; // It will not throw any warning
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: firebase.User;
  isLoggedIn = new Subject();

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user$ = user;
        this.isLoggedIn.next(true);
      } else {
        localStorage.setItem('user', null);
        this.isLoggedIn.next(false);
      }
    });
  }

  async loginViaGoogle() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        this.afAuth.authState.subscribe(user => {
          this.user$ = user;
          this.isLoggedIn.next(true);
        });
      })
      .catch(() => {
        // TODO: add error if authentication is incorrect.
      });
  }

  async logout() {
    return this.afAuth.signOut();
  }

}
