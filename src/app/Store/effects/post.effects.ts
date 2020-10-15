import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { LoadPostAction, PostActionTypes, LoadPostSuccessAction, LoadPostFailureAction,
  AddPostAction, AddPostSuccessAction, AddPostFailureAction,
  DeletePostAction, DeletePostActionSuccess, DeletePostActionFailure } from '../actions/posts.actions';
import { of } from 'rxjs';
import { PostsService } from 'src/app/posts.service';
import {EmbeddedTemplateAst} from '@angular/compiler';

@Injectable()
export class PostEffects{
  @Effect() loadPost$ = this.actions$.pipe(
    ofType<LoadPostAction>(PostActionTypes.LOAD_POST),
    mergeMap(
      () => this.postService.getPost()
        .pipe(
          map(data => {
            return new LoadPostSuccessAction(data);
          }),
          catchError(error => of(new LoadPostFailureAction(error)))
        )
    ),
  );

  @Effect() addPost$ = this.actions$
    .pipe(
      ofType<AddPostAction>(PostActionTypes.ADD_POST),
      mergeMap(
        (data) => this.postService.addShopping(data.payload)
          .pipe(
            map(() => new AddPostSuccessAction(data.payload)),
            catchError(error => of(new AddPostFailureAction(error)))
          )
      )
    );

  @Effect() deletePost$ = this.actions$
    .pipe(
      ofType<DeletePostAction>(PostActionTypes.DELETE_POST),
      mergeMap(
        (data) => this.postService.deletePost(data.payload)
          .pipe(
            map(() => new DeletePostActionSuccess(data.payload)),
            catchError(error => of (new DeletePostActionFailure(error)))
          )
      )
    );

  constructor(
    private actions$: Actions,
    private postService: PostsService,
  ) {}
}
