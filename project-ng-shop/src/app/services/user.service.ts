import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore) { }

  saveUser(user: firebase.User) {
    const newUser = { email: user.email, isAdmin: true, name: user.displayName };
    this.afs.collection('Users').doc(user.uid).set(Object.assign({}, newUser));
  }

  getUserFromDatabase(uid: string) {
    return this.afs.collection('Users').doc(uid).valueChanges();
  }
}
