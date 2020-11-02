import {Injectable, OnDestroy} from '@angular/core';
import {ActionsSubject, Store } from '@ngrx/store';
import {Subject} from 'rxjs';
import * as store from '../../Store';

@Injectable()
export abstract class BaseHandler implements OnDestroy {
  // tslint:disable-next-line:variable-name
  public _endSubscriptions$: Subject<boolean> = new Subject();

  public constructor(protected appState$: Store<store.State>, protected actionsSubject: ActionsSubject) {}

  public ngOnDestroy(): void {
    this._endSubscriptions$.next(true);
    this._endSubscriptions$.complete();
  }
}
