import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/do'

@Injectable()
export class RootEffects {
  constructor(private actions$: Actions) {

  }

  @Effect({dispatch: false}) logActions$ = this.actions$
    .do(action => {
      console.group('Effects | Root');
      console.log(action);
      console.groupEnd();
    });
}
