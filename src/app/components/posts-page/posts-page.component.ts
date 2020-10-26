import { Component, OnInit } from '@angular/core';
import {State, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Posts} from '../../Store/models/posts.model';
import {Comments} from '../../Store/models/comments.model';
import {AddPostAction, DeletePostAction, LoadPostAction} from '../../Store/actions/posts.actions';
import {AddCommentAction, DeleteCommentAction, LoadCommentAction} from '../../Store/actions/comments.action';
import { v4 as uuid } from 'uuid';
import {savedId} from '../posts/posts.component';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {

  // @ts-ignore
  constructor(private store: Store<State>) { }
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
  savedId = savedId;

  ngOnInit(): void {
    this.posts = this.store.select(store => store.posts.post);
    this.pLoading$ = this.store.select(store => store.posts.loading);
    this.pError$ = this.store.select(store => store.posts.error);

    this.comments = this.store.select(store => store.comments.comment);
    this.cLoading$ = this.store.select(store => store.comments.loading);
    this.cError$ = this.store.select(store => store.comments.error);

    this.store.dispatch(new LoadPostAction());
    this.store.dispatch(new LoadCommentAction());
    console.log(savedId);
  }

  // tslint:disable-next-line:typedef
  toggleFocus(postid){
    this.focusId = postid;
    this.focus = !this.focus;
  }

  // tslint:disable-next-line:typedef
  postComment(newComment: string, commentAuthor: string, postId: number, ){
    if (newComment !== '' && commentAuthor !== ''){
      this.newCommentId = uuid();
      this.newComment$ = {
        id: this.newCommentId,
        body: newComment,
        postId,
        author: commentAuthor,
      };
      this.store.dispatch(new AddCommentAction((this.newComment$)));
      this.focus = !this.focus;
    }
    else{
      alert('Author area or comment are can\'t be empty!');
    }
  }

  // tslint:disable-next-line:typedef
  deleteComment(id: number){
    this.store.dispatch(new DeleteCommentAction(id));
  }

  // tslint:disable-next-line:typedef
  deletePost(id: number){
    this.store.dispatch(new DeletePostAction(id));
  }
}
