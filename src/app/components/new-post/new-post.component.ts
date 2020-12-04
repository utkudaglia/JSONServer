import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs';

import { NewPostService} from '../../services/new-post/new-post.service';
import {AuthService} from '../../services/Auth/auth.service';

import {Post} from '../../Store/models/new-post.model';
import {User} from '../../Store/models/user.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  posts$: Observable<Post[]>;
  userId: Pick<User, "id">;

  constructor(
    private postService: NewPostService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.posts$ = this.fetchAll();
    this.userId = this.authService.userId;
  }

  fetchAll(): Observable<Post[]>{
    return this.postService.fetchAll();
  }

  createPost(): void {
    this.posts$ = this.fetchAll();
  }

  delete(postId: Pick<Post, "id">): void {
    this.postService
      .deletePost(postId)
      .subscribe(() => (this.posts$ = this.fetchAll()));
  }
}
