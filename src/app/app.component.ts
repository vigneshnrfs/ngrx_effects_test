import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as Counter from './counter.actions';


export interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counter: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter = store.select('counter');
  }

  increment(){
    this.store.dispatch(new Counter.Increment());
  }

  decrement(){
    this.store.dispatch(new Counter.Decrement());
  }

  reset(){
    this.store.dispatch(new Counter.Reset(3));
  }
}
