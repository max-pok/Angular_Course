import { FollowerService } from '../services/follower.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, combineLatest } from 'rxjs'; 
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any = [];

  constructor(private service: FollowerService, private route: ActivatedRoute) { }

  ngOnInit(): void { 
    combineLatest([this.route.queryParamMap, this.route.queryParamMap]).pipe(
      switchMap(combined => {
        let page = combined[0].get('page');
        let order = combined[1].get('order');
        
        return this.service.getAll;
      })
    ).subscribe(followers => this.followers = followers); // (parameter) followers: Response
  }
}
