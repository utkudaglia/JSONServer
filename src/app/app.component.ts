import { Component, OnInit } from '@angular/core';
import {select, State, Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { AppState } from './Store/models/app-state.model';
import { Posts } from './Store/models/posts.model';
import { AddCommentAction, DeleteCommentAction, LoadCommentAction } from './Store/actions/comments.action';
import {getPostErrorSelector, getPostSelector} from './Store/selectors';
import {map} from 'rxjs/operators';
import {LoadPostAction, AddPostAction, DeletePostAction} from './Store/actions/posts.actions';
import { Comments } from './Store/models/comments.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @ts-ignore
  constructor(private store: Store<State>) {}
  posts: Observable<Array<Posts>>;
  pLoading$: Observable<boolean>;
  pError$: Observable<Error>;
  newPost: Posts = {id: 0, title: '', post: '', author: ''};

  comments: Observable<Array<Comments>>;
  cLoading$: Observable<boolean>;
  cError$: Observable<Error>;
  newComment: Comments = {id: 0, body: '', postId: 0, author: ''};


  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void{
    this.posts = this.store.select(store => store.posts.post);
    this.pLoading$ = this.store.select(store => store.posts.loading);
    this.pError$ = this.store.select(store => store.posts.error);

    this.comments = this.store.select(store => store.comments.comment);
    this.cLoading$ = this.store.select(store => store.comments.loading);
    this.cError$ = this.store.select(store => store.comments.error);

    this.store.dispatch(new LoadPostAction());
    this.store.dispatch(new LoadCommentAction());
    console.log(this.store);
  }



}
