import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthService} from '../../services/Auth/auth.service';
import {LoginActions, LoginActionTypes, LoginFailureAction, LoginSuccessAction} from '../actions/login.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {User} from '../models/user.model';
import {of} from 'rxjs';

@Injectable()
export class LoginEffects{
  private userEmail: Pick<User, 'email'>;
  private userPass: Pick<User, 'password'>;

  @Effect() login$ = this.actions$.pipe(
    ofType<LoginActions>(LoginActionTypes.LOGIN),
    mergeMap(
      () => this.loginService.login(this.userEmail, this.userPass)
        .pipe(
          map(data => {
            return new LoginSuccessAction(data);
          }),
          catchError(error => of(new LoginFailureAction(error)))
        )
    ),
  );

  constructor(private actions$: Actions, private loginService: AuthService) {
  }
}
