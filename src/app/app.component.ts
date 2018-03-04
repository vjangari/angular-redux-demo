import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { Actions } from './action.service';

@Component({
  selector: 'ngr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: number;
  constructor(private ngRedux: NgRedux<IAppState>, private actions: Actions){
    this.ngRedux.select<number>('counter').subscribe(newCount=> this.count=newCount)
  }
  increment(){
    this.ngRedux.dispatch(this.actions.increment());
  }
  decrement(){
    this.ngRedux.dispatch(this.actions.decrement());
  }
}
