import { Component, OnDestroy } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { Actions } from './action.service';

@Component({
  selector: 'ngr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  count: number;
  subscription;
  constructor(private ngRedux: NgRedux<IAppState>, private actions: Actions){
   this.subscription= this.ngRedux.select<number>('counter').subscribe(newCount=> this.count=newCount)
  }
  increment(){
    this.ngRedux.dispatch(this.actions.increment());
  }
  decrement(){
    this.ngRedux.dispatch(this.actions.decrement());
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
