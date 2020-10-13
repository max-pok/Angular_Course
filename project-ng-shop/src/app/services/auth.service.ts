import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  isAdmin$: Observable<boolean>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {    
    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.user$ = user;

    //     this.afs.collection('Users').doc(this.user$.uid).valueChanges().subscribe(results => {
    //       if (results) this.isAdmin = results['isAdmin'];
    //     });
    //   }
    // });

    this.user$ = this.afAuth.authState;
    // this.isAdmin$ = this.afs.collection('Users').doc(this.user$.uid).valueChanges()['isAdmin'];
  }

  async loginViaGoogle() {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCredentials) => {
        this.afs.collection('Users').doc(userCredentials.user.uid).valueChanges().subscribe(results => {
          if (results == null) {
            // Add user to database.
            const newUser = { email: userCredentials.user.email, isAdmin: true, name: userCredentials.user.displayName };
            this.afs.collection('Users').doc(userCredentials.user.uid).set(Object.assign({}, newUser));
          }
        });
      })
      .catch((error) => {
        console.log(error);
        // TODO: add error if authentication is incorrect.
      });
  }

  async logout() {
    return this.afAuth.signOut().then(() => {
      this.user$ = null;

      this.router.navigate(['']);
    });
  }

}
