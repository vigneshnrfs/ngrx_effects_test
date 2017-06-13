import * as CounterActions from './counter.actions';

export type Action = CounterActions.All;

export function counterReducer(state: number = 0, action: Action): number {
  switch(action.type) {
    case CounterActions.INCREMENT: {
      return state + 1;
    }

    case CounterActions.DECREMENT: {
      return state - 1;
    }

    case CounterActions.RESET: {
      return action.payload; // typed to number
    }

    default: {
      return state;
    }
  }
}


export function coreReducer(state: any, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const reducer = {
  counter: counterReducer,
  coreReducer: coreReducer
};

