import {User} from '../models/user.model';
import {LoginAction, LoginActionTypes} from '../actions/login.action';
import {act} from '@ngrx/effects';

interface NewLoginState{
  user: User;
  loading: boolean;
  error: any;
}

export const initialState: NewLoginState ={
  user: null,
  loading: false,
  error: undefined,
};

export function loginReducer(state: NewLoginState = initialState, action: LoginAction): NewLoginState{
  switch (action.type){
    case LoginActionTypes.LOGIN: {
      return{
        ...state,
        loading: true,
      };
    }
    case LoginActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    }
    case LoginActionTypes.LOGIN_FAILURE: {
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
