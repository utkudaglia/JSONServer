import {Injectable, OnDestroy} from '@angular/core';
import {BaseHandler} from '../../shared/handler/base.handler';
import {ActionsSubject, select, Store} from '@ngrx/store';
import * as store from '../../Store';
import {Observable} from 'rxjs';
import {PostsModel} from '../../Store/models/posts.model';
import {
  getCommentSelector,
  getPostSelector
} from '../../Store/selectors';
import {takeUntil} from 'rxjs/operators';
import {CommentsModel} from '../../Store/models/comments.model';
import {AddCommentAction, DeleteCommentAction, LoadCommentAction} from '../../Store/actions/comments.action';
import {DeletePostAction, LoadPostAction} from '../../Store/actions/posts.actions';
import { savedId } from '../posts/posts.handler';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PostsPageHandler extends BaseHandler implements OnDestroy {
  focusId: any;

  focus = false;

  newCommentId: number;

  savedId = savedId;

  public posts$: Observable<PostsModel[]> = this.appState$.pipe(
    select(getPostSelector),
    takeUntil(this._endSubscriptions$)
  );

  public comments$: Observable<CommentsModel[]> = this.appState$.pipe(
    select(getCommentSelector),
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

  // tslint:disable-next-line:typedef
  public toggleFocus(postid): void {
    this.focusId = postid;
    this.focus = !this.focus;
  }

  // tslint:disable-next-line:typedef
  public postComment(newComment: string, commentAuthor: string, postId: number): void {
    if (newComment !== '' && commentAuthor !== ''){
      this.newCommentId = uuid();
      this.appState$.dispatch(
        new AddCommentAction(
          new CommentsModel({
            id: this.newCommentId,
            body: newComment,
            postId,
            author: commentAuthor,
          })
        ));
      this.focus = !this.focus;
    }
    else{
      alert('Author area or comment are can\'t be empty!');
    }
  }

  // tslint:disable-next-line:typedef
  public deleteComment(id: number): void {
    this.appState$.dispatch(new DeleteCommentAction(id));
  }

  // tslint:disable-next-line:typedef
  public deletePost(id: number): void{
    this.appState$.dispatch(new DeletePostAction(id));
  }
}
