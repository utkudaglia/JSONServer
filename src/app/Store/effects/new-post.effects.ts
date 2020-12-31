import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, mergeMap, catchError} from 'rxjs/operators';

import {NewPostsActionTypes, LoadPostAction, LoadPostSuccessAction, LoadPostFailureAction, AddPostAction, AddPostSuccessAction,
  AddPostFailureAction, DeletePostAction, DeletePostActionSuccess, DeletePostActionFailure} from '../actions/new-posts.actions';
import {of} from 'rxjs';
import {NewPostService} from '../../services/new-post/new-post.service';
import {PostActionTypes} from '../actions/posts.actions';
import {User} from '../models/user.model';

@Injectable()
export class NewPostEffects{
  private userId: Pick<User, 'id'>;

  @Effect() loadPost$ = this.actions$.pipe(
    ofType<LoadPostAction>(NewPostsActionTypes.LOAD_POST),
    mergeMap(
      () => this.postService.fetchAll()
        .pipe(
          map(data => {
            return new LoadPostSuccessAction(data);
          }),
          catchError(error => of(new LoadPostFailureAction(error)))
        )
    ),
  );

  @Effect() addPost$ = this.actions$.pipe(
    ofType<AddPostAction>(PostActionTypes.ADD_POST),
    mergeMap(
      (data) => this.postService.createPost(data.payload, this.userId)
        .pipe(
          map(() => new AddPostSuccessAction(data.payload)),
          catchError(error => of(new AddPostFailureAction(error)))
        )
    ),
  );

  @Effect() deletePost$ = this.actions$
    .pipe(
      ofType<DeletePostAction>(NewPostsActionTypes.DELETE_POST),
      mergeMap(
        (data) => this.postService.deletePost(this.userId)
          .pipe(
            map(() => new DeletePostActionSuccess(data.payload)),
            catchError(error => of(new DeletePostActionFailure(error)))
          )
      )
    );

  constructor(private actions$: Actions, private postService: NewPostService) {}
}
