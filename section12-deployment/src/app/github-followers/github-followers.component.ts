import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './github-followers.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any = [];

  constructor(private route: ActivatedRoute, private service: GithubFollowersService) { }

  ngOnInit(): void {
    combineLatest([this.route.queryParamMap, this.route.queryParamMap]).pipe(
      switchMap(combined => {
        const page = combined[0].get('id');
        const order = combined[1].get('page');
        return this.service.getFollowers();
      })
    ).subscribe(followers => this.followers = followers); // (parameter) followers: Response
  }
}
