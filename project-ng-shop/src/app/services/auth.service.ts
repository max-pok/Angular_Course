import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  isAdmin: boolean;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router, private route: ActivatedRoute, private userService: UserService) {    
    this.user$ = this.afAuth.authState;

    this.user$.subscribe((user) => {
      if (user) {
        this.userService.getUserFromDatabase(user.uid).subscribe(data => this.isAdmin = data['isAdmin'])
      }
    });
  }

  async loginViaGoogle() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCredentials) => {
        this.afs.collection('Users').doc(userCredentials.user.uid).valueChanges().subscribe(results => {
          if (results == null) {
            // Add user to database.
            this.userService.saveUser(userCredentials.user);
          }
        }).unsubscribe();
      })
      .catch((error) => {
        console.log(error);
        // TODO: add error if authentication is incorrect.
      }).then(() => {
        this.router.navigate([this.route.snapshot.queryParams.returnUrl || 'home']);
      });
  }

  async logout() {
    return this.afAuth.signOut().then(() => {
      this.user$ = null;

      this.router.navigate(['']);
    });
  }

}
