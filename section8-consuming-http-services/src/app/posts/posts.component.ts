import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any = [];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.posts.subscribe(response => {
      this.posts = response;  // response returns json objects.
    })
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.service.createPost(post).subscribe((response: Response) => {
      post['id'] = response['id'];
      this.posts.splice(0, 0, post);
    });
  }

  updatePost(post: Object) {
    this.service.updatePost(post).subscribe((response: Response) => {
        console.log(response);
    })
  }

  deletePost(post: Object) {
    this.service.deletePost(post).subscribe((response: Response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
    })
  }
}
