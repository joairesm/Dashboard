import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {NgRedux, NgReduxModule} from 'ng2-redux';
import { IAppState, rootReducer, INITIALSTATE } from './store';

import { AppComponent } from './app.component';
import { AccountEntryComponent } from './accountentry/accountentry.component';
import { ToggleButtonComponent } from './togglebutton/togglebutton.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccountEntryComponent,
    ToggleButtonComponent,
    DashboardComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

/**
 * Redux service is injected on the app main module constructor.
 */
export class AppModule {
  constructor (redux: NgRedux<IAppState>){
    redux.configureStore(rootReducer, INITIALSTATE)
  }
 }
