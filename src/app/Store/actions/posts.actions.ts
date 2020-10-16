// @ts-ignore
import { Action } from '@ngrx/store';
import { Posts } from '../models/posts.model';

export enum PostActionTypes{
  LOAD_POST = '[BLOG] Load Post',
  LOAD_POST_SUCCESS = '[BLOG] Load Post Success',
  LOAD_POST_FAILURE = '[BLOG] Load Post Failure',
  ADD_POST = '[BLOG] Add Post',
  ADD_POST_SUCCESS = '[BLOG] Add Post Success',
  ADD_POST_FAILURE = '[BLOG] Add Post Failure',
  DELETE_POST = '[BLOG] Delete Post',
  DELETE_POST_SUCCESS = '[BLOG] Delete Post Success',
  DELETE_POST_FAILURE = '[BLOG] Delete Post Failure',
}

export class LoadPostAction implements Action{
  readonly type = PostActionTypes.LOAD_POST;
}

export class LoadPostSuccessAction implements Action{
  readonly type = PostActionTypes.LOAD_POST_SUCCESS;

  constructor(public payload: Array<Posts>) {}
}

export class LoadPostFailureAction implements Action{
  readonly type = PostActionTypes.LOAD_POST_FAILURE;

  constructor(public payload: Error){}
}

export class AddPostAction implements Action{
  readonly type = PostActionTypes.ADD_POST;

  constructor(public payload: Posts) {}
}

export class AddPostSuccessAction implements  Action{
  readonly type = PostActionTypes.ADD_POST_SUCCESS;

  constructor(public payload: Posts) {}
}

export class AddPostFailureAction implements Action{
  readonly type = PostActionTypes.ADD_POST_FAILURE;

  constructor(public payload: Error) {}
}

export class DeletePostAction implements Action{
  readonly type = PostActionTypes.DELETE_POST;

  constructor(public payload: number) {}
}

export class DeletePostActionSuccess implements Action{
  readonly type = PostActionTypes.DELETE_POST_SUCCESS;

  constructor( public payload: number) {}
}

export class DeletePostActionFailure implements Action{
  readonly type = PostActionTypes.DELETE_POST_FAILURE;

  constructor( public payload: Error) {}
}


export type PostsAction = LoadPostAction |
  LoadPostSuccessAction |
  LoadPostFailureAction |
  AddPostAction |
  AddPostSuccessAction |
  AddPostFailureAction |
  DeletePostAction |
  DeletePostActionSuccess |
  DeletePostActionFailure ;

