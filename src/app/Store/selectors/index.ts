// @ts-ignore
import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import * as store from '../';
import {PostState} from '../reducers/posts.reducer';
import {CommentState} from '../reducers/comments.reducer';
import {CommentsModel} from '../models/comments.model';
import {PostsModel} from '../models/posts.model';

export const postState: MemoizedSelector<store.State, PostState> = createFeatureSelector<PostState>('post');

export const commentState: MemoizedSelector<store.State, CommentState> = createFeatureSelector<CommentState>('comment');

export const getPostSelector: MemoizedSelector<store.State, PostsModel[]> = createSelector(
  postState,
  (state: PostState) => state?.post,
);

export const getCommentSelector: MemoizedSelector<store.State, CommentsModel[]> = createSelector(
  commentState,
  (state: CommentState) => state?.comment,
);

