import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  title: string = "List of authors";

  service = new AuthorsService();

  getAuthors() {
    return this.service.getAuthors();
  }

}
