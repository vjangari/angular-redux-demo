import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { Actions } from '../action.service';

@Component({
  selector: 'ngr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  count: number;
  subscription;
  constructor(private ngRedux: NgRedux<IAppState>, private action: Actions) { 
    this.subscription=this.ngRedux.select<number>('counter').subscribe(newCount=> this.count=newCount)
  }

  ngOnInit() {
  }
  reset(){
    this.ngRedux.dispatch(this.action.reset());
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
