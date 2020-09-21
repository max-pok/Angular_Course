import { Component, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses: any = [];
  courses$: Observable<any[]>;
  course$;
  auther$;
  authors$;

  constructor(private afdb: AngularFireDatabase) {
    // this.readList();
    this.asyncReadList();
    this.readObject();
  }

  // Reading Lists
  readList(): void {
    this.afdb.list('courses').valueChanges().subscribe(courses => {
      this.courses = courses;
      console.log(this.courses);
    });
  }

  // Reading an Object
  readObject(): void {
    this.course$ = this.afdb.object('courses/1').valueChanges();
    this.auther$ = this.afdb.object('authors/1').valueChanges();
    this.authors$ = this.afdb.list('authors').valueChanges();
  }

  // Async Pipe
  asyncReadList(): void {
    this.courses$ = this.afdb.list('courses').valueChanges();
  }

  add(courseName: HTMLInputElement): void {
    this.afdb.list('courses').push({
      title: courseName.value,
      price: 0,
      author: 'Max Pokidaylo'
    });
  }

  update(course): void {
    console.log(course.$key);
    this.afdb.object('courses/' + course.$key).update({
      title: course.title + ' updated'
    });
  }
}
