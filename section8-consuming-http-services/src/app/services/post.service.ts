import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url: string = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  
  public get posts() {
    return this.http.get(this.url);
  }

  public createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  public updatePost(post) {
    return this.http.patch(this.url + '/' + post['id'], JSON.stringify({ isRead: true }));
  }

  public deletePost(post) {
    return this.http.delete(this.url + '/' + post['id']);
  }
  
}
