import { Component } from '@angular/core';
import { account } from '../Models/account';
import { data } from '../services/getData';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';
import { UPDATELIST } from '../actions';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

    accounts: account[];

    constructor(private redux: NgRedux<IAppState>){
        var sub = redux.subscribe( () => {
          var store = redux.getState();
          this.accounts = store.accounts;
        });

        var Newdata = data;
        this.getdata(Newdata);
    }

    getdata(accounts: account[]){
        this.redux.dispatch( { type: UPDATELIST, accounts: accounts } );
    }

}
