import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';

@Component({
  selector: 'ngr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  count: number;
  constructor(private ngRedux: NgRedux<IAppState>) { 
    this.ngRedux.select<number>('counter').subscribe(newCount=> this.count=newCount)
  }

  ngOnInit() {
  }

}
