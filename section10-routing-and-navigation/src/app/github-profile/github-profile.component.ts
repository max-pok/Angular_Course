import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  id;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("GithubProfile ngOnInit");
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id'); // the + sign converts a string to number.
      console.log(this.id);
    });
  }

}
