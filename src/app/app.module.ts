import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux  } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { Actions } from './action.service';
import { rootReducer, INITIAL_STATE } from './store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [Actions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<any>){
    ngRedux.configureStore(rootReducer,INITIAL_STATE);
  }
 }
