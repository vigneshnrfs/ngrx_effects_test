import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/do'

@Injectable()
export class Feature1Effects {
  constructor(private actions$: Actions) {

  }

  @Effect({dispatch: false}) logActions$ = this.actions$
    .do(action => {
      console.group('Effects | Feature 1');
      console.log(action);
      console.groupEnd();
    });
}
