import {CommentActionTypes, CommentsAction} from '../actions/comments.action';
import {CommentsModel} from '../models/comments.model';

export interface CommentState{
  comment: CommentsModel[];
  loading: boolean;
  error: any;
}

export const initialState: CommentState = {
  comment: [],
  loading: false,
  error: undefined,
};

export function commentReducer(state: CommentState, action: CommentsAction): CommentState{
  switch (action.type){
    case CommentActionTypes.LOAD_COMMENT: {
      return {
        ...state,
        loading: true,
      };
    }
    case CommentActionTypes.LOAD_COMMENT_SUCCESS: {
      return {
        ...state,
        comment: action.payload,
        loading: false,
      };
    }
    case CommentActionTypes.LOAD_COMMENT_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case CommentActionTypes.ADD_COMMENT: {
      return {
        ...state,
        loading: true,
      };
    }
    case CommentActionTypes.ADD_COMMENT_SUCCESS: {
      return {
        ...state,
        comment: [...state.comment, action.payload],
        loading: false,
      };
    }
    case CommentActionTypes.ADD_COMMENT_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case CommentActionTypes.DELETE_COMMENT: {
      return {
        ...state,
        error: true,
      };
    }
    case CommentActionTypes.DELETE_COMMENT_SUCCESS: {
      return {
        ...state,
        comment: state.comment.filter(item => item.id !== action.payload),
        loading: false,
      };
    }
    case CommentActionTypes.DELETE_COMMENT_FAILURE: {
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
