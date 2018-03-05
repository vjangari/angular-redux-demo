import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class Actions {
static INCREMENT = 'INCREMENT';
static DECREMENT = 'DECREMENT';
static RESET = 'RESET';
  constructor() { }

  increment(): Action{
    return {type: Actions.INCREMENT};
  }
  decrement(): Action{
    return {type: Actions.DECREMENT};
  }
  reset(): Action{
    return {type: Actions.RESET};
  }
}
