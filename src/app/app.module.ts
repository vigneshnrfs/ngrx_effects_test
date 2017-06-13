import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Feature1Module } from './feature-1/feature-1.module';
import { counterReducer, reducer } from './counter.reducer';
import { combineReducers, compose, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RootEffects } from './root.effects';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';

export function debug(reducer: any) {
  return function (state: any, action: any) {
    console.group('Store Action | ' + action.type);
    console.log('state', state);
    console.log('action', action);
    console.groupEnd();

    return reducer(state, action);
  }
}

export function debugReducerFactory(){
  return compose(debug, combineReducers);
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducer, {reducerFactory: debugReducerFactory()}),
    EffectsModule.forRoot([RootEffects]),
    Feature1Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
