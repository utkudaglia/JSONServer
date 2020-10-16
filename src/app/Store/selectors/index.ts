// @ts-ignore
import {Action, createFeatureSelector, createSelector, MemoizedSelector, Store} from '@ngrx/store';
import * as store from '../';
import {PostState} from '../reducers/posts.reducer';
import {CommentState} from '../reducers/comments.reducer';
import {Comments} from '../models/comments.model';
import {Posts} from '../models/posts.model';

export const postState: MemoizedSelector<store.State, PostState> = createFeatureSelector<PostState>('post');

export const commentState: MemoizedSelector<store.State, CommentState> = createFeatureSelector<CommentState>('comment');

export const getPostSelector: MemoizedSelector<store.State, Posts[]> = createSelector(
  postState,
  (state: PostState) => state.post,
);

export const getPostErrorSelector: MemoizedSelector<store.State, Error> = createSelector(
  postState,
  (state: PostState) => state.error,
);

export const getCommentSelector: MemoizedSelector<store.State, Comments[]> = createSelector(
  commentState,
  (state: CommentState) => state.comment,
);

export const getCommentErrorSelector: MemoizedSelector<store.State, Error> = createSelector(
  commentState,
  (state: CommentState) => state.error,
);

