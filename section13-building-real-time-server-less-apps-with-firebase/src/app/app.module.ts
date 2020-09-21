import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAerdZoPkrwxdp4mCY4WmxSvAFyMqUocGE',
  authDomain: 'angular-course-833db.firebaseapp.com',
  databaseURL: 'https://angular-course-833db.firebaseio.com',
  projectId: 'angular-course-833db',
  storageBucket: 'angular-course-833db.appspot.com',
  messagingSenderId: '262528021457',
  appId: '1:262528021457:web:778c93f8803b599390a6f0',
  measurementId: 'G-RKBQQR3KC4'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
