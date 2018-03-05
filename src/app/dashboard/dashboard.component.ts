import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { Actions } from '../action.service';

@Component({
  selector: 'ngr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  count: number;
  constructor(private ngRedux: NgRedux<IAppState>, private action: Actions) { 
    this.ngRedux.select<number>('counter').subscribe(newCount=> this.count=newCount)
  }

  ngOnInit() {
  }
  reset(){
    this.ngRedux.dispatch(this.action.reset());
  }

}
