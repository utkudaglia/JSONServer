import { Action } from '@ngrx/store';
import { CommentsModel } from '../models/comments.model';

export enum CommentActionTypes{
  LOAD_COMMENT = '[BLOG] Load Comment',
  LOAD_COMMENT_SUCCESS = '[BLOG] Load Comment Success',
  LOAD_COMMENT_FAILURE = '[BLOG] Load Comment Failure',
  ADD_COMMENT = '[BLOG] Add Comment',
  ADD_COMMENT_SUCCESS = '[BLOG] Add Comment Success',
  ADD_COMMENT_FAILURE = '[BLOG] Add Comment Failure',
  DELETE_COMMENT = '[BLOG] Delete Comment',
  DELETE_COMMENT_SUCCESS = '[BLOG] Delete Comment Success',
  DELETE_COMMENT_FAILURE = '[BLOG] Delete Comment Success',
}

export class LoadCommentAction implements Action{
  readonly type = CommentActionTypes.LOAD_COMMENT;
}

export class LoadCommentSuccessAction implements Action{
  readonly type = CommentActionTypes.LOAD_COMMENT_SUCCESS;

  constructor(public payload: Array<CommentsModel>) {}
}

export class LoadCommentFailureAction implements Action{
  readonly type = CommentActionTypes.LOAD_COMMENT_FAILURE;

  constructor(public payload: Error) {  }
}

export class AddCommentAction implements Action{
  readonly type = CommentActionTypes.ADD_COMMENT;

  constructor(public payload: CommentsModel) {}
}

export class AddCommentSuccessAction implements Action{
  readonly type = CommentActionTypes.ADD_COMMENT_SUCCESS;

  constructor(public payload: CommentsModel) {}
}

export class AddCommentFailureAction implements Action{
  readonly type = CommentActionTypes.ADD_COMMENT_FAILURE;

  constructor(public payload: Error) {}
}

export class DeleteCommentAction implements Action{
  readonly type = CommentActionTypes.DELETE_COMMENT;

  constructor(public payload: number) {}
}

export class DeleteCommentSuccessAction implements Action{
  readonly type = CommentActionTypes.DELETE_COMMENT_SUCCESS;

  constructor(public payload: number) {}
}

export class DeleteCommentFailureAction implements Action{
  readonly type = CommentActionTypes.DELETE_COMMENT_FAILURE;

  constructor(public payload: Error) {}
}

export type CommentsAction = LoadCommentAction |
  LoadCommentSuccessAction |
  LoadCommentFailureAction |
  AddCommentAction |
  AddCommentSuccessAction |
  AddCommentFailureAction |
  DeleteCommentAction |
  DeleteCommentSuccessAction |
  DeleteCommentFailureAction;
