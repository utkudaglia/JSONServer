import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as store from '../../Store';

import { NewPostService} from '../../services/new-post/new-post.service';
import {AuthService} from '../../services/Auth/auth.service';

import {Post} from '../../Store/models/new-post.model';
import {User} from '../../Store/models/user.model';
import {AddPostAction, DeletePostAction, LoadPostAction} from '../../Store/actions/new-posts.actions';
import * as postForm from '../create-post/create-post.component';


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
    private authService: AuthService,
    private appState$: Store<store.State>
  ) { }

  ngOnInit(): void {
    this.posts$ = this.fetchAll();
    this.appState$.dispatch(new LoadPostAction());
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
    console.log(postId);

    this.appState$.dispatch(new DeletePostAction(postId));
  }
}
