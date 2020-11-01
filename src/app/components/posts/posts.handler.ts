import { Injectable } from '@angular/core';
import { OnDestroy } from '@angular/core';
import {ActionsSubject, select, Store } from '@ngrx/store';
import { BaseHandler } from 'src/app/shared/handler/base.handler';
import * as store from '../../Store';
import {Observable} from 'rxjs';
import {PostsModel} from '../../Store/models/posts.model';
import {AddPostAction, DeletePostAction, LoadPostAction} from '../../Store/actions/posts.actions';
import {LoadCommentAction} from '../../Store/actions/comments.action';
import {getPostSelector} from 'src/app/Store/selectors';
import { v4 as uuid } from 'uuid';
import {takeUntil} from 'rxjs/operators';

@Injectable()
export class PostsHandler extends BaseHandler implements OnDestroy {

  public add = false;

  public newPostId: number;

  public posts$: Observable<PostsModel[]> = this.appState$.pipe(
    select(getPostSelector),
    takeUntil(this._endSubscriptions$)
  );

  constructor(
    protected appState$: Store<store.State>,
    protected actionsSubject: ActionsSubject,
  ) {
    super(appState$, actionsSubject);
  }

  public init(): void {
    this.appState$.dispatch(new LoadPostAction());
    this.appState$.dispatch(new LoadCommentAction());
  }

  public toggle(): void {
    this.add = !this.add;
  }

  public postPost(newPostTitle: string, newPost: string, newPostAuthor): void {
    if (newPost !== '' && newPostTitle !== '' && newPostAuthor !== '') {
      this.newPostId = uuid();
      this.appState$.dispatch(
        new AddPostAction(
          new PostsModel({
            id: this.newPostId,
            title: newPostTitle,
            post: newPost,
            author: newPostAuthor,
          })
        )
      );
      this.add = !this.add;
    } else {
      alert('Author area, title area or post area can\'t be empty!');
    }
  }

  public deletePost(id: number): void {
    this.appState$.dispatch(new DeletePostAction(id));
  }

  public savePostId(id: number): void {
    savedId = id;
  }
}
// @ts-ignore
export let savedId;
