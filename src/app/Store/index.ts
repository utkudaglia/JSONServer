import { ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import * as fromCommentsReducer from './reducers/comments.reducer';
import * as fromPostsReducer from './reducers/posts.reducer';
/*
* Initial NGRX state Interface
* */
export interface State {
  comments: fromCommentsReducer.CommentState;
  posts: fromPostsReducer.PostState;
}

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
export const store: ActionReducerMap<State> = {
  comments: fromCommentsReducer.commentReducer,
  posts: fromPostsReducer.postReducer,
};

/**
 * The Injection Token of the Root State ActionReducerMap. See getRootStateReducers() documentation or the link for more information.
 *
 * @see https://github.com/ngrx/platform/blob/master/docs/store/api.md#injecting-reducers
 * @author Tunç Akyazı <akyazi.tunc@gmail.com>
 * @export
 * @type {InjectionToken<ActionReducerMap<State>>}
 */
export const ROOT_STATE_REDUCER_TOKEN: InjectionToken<ActionReducerMap<State>> = new InjectionToken<ActionReducerMap<State>>('Root State ActionReducerMap');

// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

/**
 * Returns the Root State ActionReducerMap as Injection Token because function calls in the NgModule decorators are forbidden.
 * StoreModule.forRoot() used to take the ActionReducerMap 'store' as parameter. It contains the 'forms' property that is initialized
 * with combineReducers, which is a function call. The provided solution was proposed by Brandon Roberts from the ngrx-team.
 *
 * @see https://github.com/ngrx/platform/blob/master/docs/store/api.md#injecting-reducers
 * @author Tunç Akyazı <akyazi.tunc@gmail.com>
 * @export
 * @returns {ActionReducerMap<State>}
 */
export function getRootStateReducers(): ActionReducerMap<State> {
  return store;
}
