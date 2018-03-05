import { Actions } from './action.service';
import { Action } from 'redux';
export interface IAppState{
    counter: number;
}
export const INITIAL_STATE: IAppState = {
    counter: 0
}
export function rootReducer(lastState: IAppState, action: Action){
    switch(action.type){
        case Actions.INCREMENT : return { counter: lastState.counter+1}
        case Actions.DECREMENT: return { counter: lastState.counter-1}
        case Actions.RESET: return { counter: 0}
    }
    return lastState;
}