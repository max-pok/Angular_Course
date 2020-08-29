import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  category = [
    { id: 1, name: "Development" },
    { id: 2, name: "Art" },
    { id: 3, name: "Language" }
  ];

  courses = [];

  submitCourse(courseName) {
    this.courses.push({ "name": courseName.value });
  }
}
