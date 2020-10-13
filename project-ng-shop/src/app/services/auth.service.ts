import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app'; // It will not throw any warning
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: firebase.User;
  isLoggedIn = new Subject();
  isAdmin = new Subject();

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user$ = user;
        this.isLoggedIn.next(true);
      } else {
        this.isLoggedIn.next(false);
      }
    });
  }

  loginViaGoogle() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        this.afAuth.authState.subscribe(user => {
          this.user$ = user;
          this.isLoggedIn.next(true);

          this.afs.collection('Users').doc(this.user$.uid).valueChanges().subscribe(result => {
            if (result == null) { // If user do not exist in the database.
              const newUser = { email: user.email, isAdmin: false, name: user.displayName };
              this.afs.collection('Users').doc(this.user$.uid).set(Object.assign({}, newUser));

              this.isAdmin.next(false);
            } else { // User exists in database.
              this.isAdmin.next(result['isAdmin']);
            }

            this.router.navigate(['']);
          });
        });
      })
      .catch(() => {
        // TODO: add error if authentication is incorrect.
        this.isLoggedIn.next(false);
      });
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      this.isLoggedIn.next(false);
      this.user$ = null;

      this.router.navigate(['']);
    });
  }

}
