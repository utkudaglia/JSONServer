import {PostActionTypes, PostsAction} from '../actions/posts.actions';
import {Posts} from '../models/posts.model';

export interface PostState{
  post: Posts[];
  loading: boolean;
  error: any;
}

export const initialState: PostState = {
  post: [],
  loading: false,
  error: undefined,
};

export function postReducer(state: PostState = initialState, action: PostsAction): PostState{
  // @ts-ignore
  switch (action.type){
    case PostActionTypes.LOAD_POST: {
      return {
        ...state,
        loading: true,
      };
    }
    case PostActionTypes.LOAD_POST_SUCCESS: {
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    }
    case PostActionTypes.LOAD_POST_FAILURE: {
      return{
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case PostActionTypes.ADD_POST: {
      return{
        ...state,
        loading: true,
      };
    }
    case PostActionTypes.ADD_POST_SUCCESS: {
      return{
        ...state,
        post: [...state.post, action.payload],
        loading: false,
      };
    }
    case PostActionTypes.ADD_POST_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case PostActionTypes.DELETE_POST: {
      return {
        ...state,
        error: true,
      };
    }
    case PostActionTypes.DELETE_POST_SUCCESS: {
      return {
        ...state,
        post: state.post.filter(item => item.id !== action.payload),
        loading: false,
      };
    }
    case PostActionTypes.DELETE_POST_FAILURE: {
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
