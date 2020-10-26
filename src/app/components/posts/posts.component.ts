import { Component, OnInit } from '@angular/core';
import {State, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Posts} from '../../Store/models/posts.model';
import {Comments} from '../../Store/models/comments.model';
import {AddPostAction, DeletePostAction, LoadPostAction} from '../../Store/actions/posts.actions';
import {AddCommentAction, DeleteCommentAction, LoadCommentAction} from '../../Store/actions/comments.action';
import { v4 as uuid } from 'uuid';

// @ts-ignore
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


// tslint:disable-next-line:align label-position


export class PostsComponent implements OnInit {

  // @ts-ignore
  constructor(private store: Store<State>) {
  }

  add = false;
  focusId: any;
  focus = false;

  posts: Observable<Array<Posts>>;
  pLoading$: Observable<boolean>;
  pError$: Observable<Error>;
  newPost$: Posts = {id: 0, title: '', post: '', author: ''};

  comments: Observable<Array<Comments>>;
  cLoading$: Observable<boolean>;
  cError$: Observable<Error>;
  newComment$: Comments = {id: 0, body: '', postId: 0, author: ''};

  // tslint:disable-next-line:typedef
  newCommentId: number;
  newPostId: number;
  // tslint:disable-next-line:typedef

  ngOnInit(): void {
    this.posts = this.store.select(store => store.posts.post);
    this.pLoading$ = this.store.select(store => store.posts.loading);
    this.pError$ = this.store.select(store => store.posts.error);

    this.comments = this.store.select(store => store.comments.comment);
    this.cLoading$ = this.store.select(store => store.comments.loading);
    this.cError$ = this.store.select(store => store.comments.error);

    this.store.dispatch(new LoadPostAction());
    this.store.dispatch(new LoadCommentAction());
  }

  // tslint:disable-next-line:typedef
  toggle() {
    this.add = !this.add;
  }

  // tslint:disable-next-line:typedef
  postPost(newPostTitle: string, newPost: string, newPostAuthor) {
    if (newPost !== '' && newPostTitle !== '' && newPostAuthor !== '') {
      this.newPostId = uuid();
      this.newPost$ = {
        id: this.newPostId,
        title: newPostTitle,
        post: newPost,
        author: newPostAuthor,
      };
      this.store.dispatch(new AddPostAction(this.newPost$));
      this.add = !this.add;
    } else {
      alert('Author area, title area or post area can\'t be empty!');
    }
  }

  // tslint:disable-next-line:typedef
  deletePost(id: number) {
    this.store.dispatch(new DeletePostAction(id));
  }

  // tslint:disable-next-line:typedef
  savePostId(id) {
    savedId = id;
  }
}
export let savedId;
