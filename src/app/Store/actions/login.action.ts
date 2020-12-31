import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

export enum LoginActionTypes{
  LOGIN = '[BLOG] Login',
  LOGIN_SUCCESS = '[BLOG] Login Success',
  LOGIN_FAILURE = '[BLOG] Login Failure',
}
export class LoginActions implements Action{
  readonly type = LoginActionTypes.LOGIN;
}

export class LoginSuccessAction implements Action{
  readonly type = LoginActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { token: string; userId: Pick<User, 'id'> }) {}
}

export class LoginFailureAction implements Action{
  readonly type = LoginActionTypes.LOGIN_FAILURE;

  constructor(public payload: Error) {}
}
export type LoginAction = LoginActions | LoginSuccessAction | LoginFailureAction;
