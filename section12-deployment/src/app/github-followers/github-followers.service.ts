import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class GithubFollowersService {
  private readonly url = 'https://api.github.com/users/mosh-hamedani/followers';

  constructor(private http: HttpClient) {
  }

  getFollowers(): any {
    return this.http.get(this.url).pipe(
      map(response => response)
    );
  }

}
