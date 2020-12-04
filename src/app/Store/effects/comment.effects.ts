import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import {LoadCommentAction, LoadCommentSuccessAction, LoadCommentFailureAction, CommentActionTypes,
  AddCommentAction, AddCommentSuccessAction, AddCommentFailureAction,
  DeleteCommentAction, DeleteCommentSuccessAction, DeleteCommentFailureAction} from '../actions/comments.action';
import { of } from 'rxjs';
import { CommentsService } from '../../services/Comment/comments.service';

@Injectable()
export  class CommentEffects {

  @Effect() loadComment$ = this.actions$
    .pipe(
      ofType<LoadCommentAction>(CommentActionTypes.LOAD_COMMENT),
      mergeMap(
        () => this.commentService.getComment()
          .pipe(
            map(data => {
              return new LoadCommentSuccessAction(data);
            }),
            catchError(error => of(new LoadCommentFailureAction(error)))
          )
      )
    );

  @Effect() addComment$ = this.actions$
    .pipe(
      ofType<AddCommentAction>(CommentActionTypes.ADD_COMMENT),
      mergeMap(
        (data) => this.commentService.addComment(data.payload)
          .pipe(
            map(() => new AddCommentSuccessAction(data.payload)),
            catchError(error => of(new AddCommentFailureAction(error)))
          )
      )
    );

  @Effect() deleteComment$ = this.actions$
    .pipe(
      ofType<DeleteCommentAction>(CommentActionTypes.DELETE_COMMENT),
      mergeMap(
        (data) => this.commentService.deleteComment(data.payload)
          .pipe(
            map(() => new DeleteCommentSuccessAction(data.payload)),
            catchError(error => of (new DeleteCommentFailureAction(error)))
          )
      )
    );

  constructor(
    private actions$: Actions,
    private commentService: CommentsService,
  ) {}
}
