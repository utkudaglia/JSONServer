import {NewPostsAction, NewPostsActionTypes} from '../actions/new-posts.actions';
import {Post} from '../models/new-post.model';

export interface NewPostState{
  post: Post[];
  loading: boolean;
  error: any;
}

export const initialState: NewPostState = {
  post: [],
  loading: false,
  error: undefined,
};

export function postReducer(state: NewPostState = initialState, action: NewPostsAction): NewPostState{
  switch (action.type){
    case NewPostsActionTypes.LOAD_POST: {
      return {
        ...state,
        loading: true,
      };
    }

    case NewPostsActionTypes.LOAD_POST_SUCCESS: {
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    }

    case NewPostsActionTypes.LOAD_POST_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }

    case NewPostsActionTypes.ADD_POST: {
      return {
        ...state,
        loading: true,
      };
    }

    case NewPostsActionTypes.ADD_POST_SUCCESS: {
      return {
        ...state,
        post: [...state.post, action.payload],
        loading: false,
      };
    }

    case NewPostsActionTypes.ADD_POST_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }

    case NewPostsActionTypes.DELETE_POST: {
      return {
        ...state,
        loading: true,
      };
    }

    case NewPostsActionTypes.DELETE_POST_SUCCESS: {
      return {
        ...state,
        post: state.post.filter(item => item.id !== action.payload),
        loading: false,
      };
    }

    case NewPostsActionTypes.DELETE_POST_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }

    default:
      return state;
  }
}
