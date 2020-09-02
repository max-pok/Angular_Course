import { BadRequestError } from './../utilities/bad-request-error';
import { NotFoundError } from './../utilities/not-found-error';
import { AppError } from './../utilities/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit, ErrorHandler } from '@angular/core';

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
    this.service.getAll.subscribe(posts => this.posts = posts );
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost['id'];
        },
        (error: AppError) => {
          this.posts.splice(0, 1);
          
          if (error instanceof BadRequestError) {
            // this.form.setErrors(error.originalError);
          } else throw error;
        });
  }

  updatePost(post: Object) {
    this.service.update(post).subscribe(updatedPost =>console.log(updatedPost));
  }

  deletePost(post: Object) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    
    this.service.delete(post['id'])
      .subscribe(
        () => {}, // can be changed to null
        (error: AppError) => {
          this.posts.splice(index, 0, post);

          if (error instanceof NotFoundError)
            alert('This post has already been deleted.');
          else throw error;
        });
    
  // Promise use:  
  // this.service.delete(post['id']);
  }
}
