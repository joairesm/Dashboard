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
    activeAccounts: number;
    price: number;
    searchText:string;

    constructor(private redux: NgRedux<IAppState>){
        var sub = redux.subscribe( () => {
          var store = redux.getState();
          this.accounts = store.accounts;
          this.calculatePrice(this.accounts);
          this.calculateActiveAccounts(this.accounts);
        });

        var Newdata = data;
        this.getdata(Newdata);

    }

    getdata(accounts: account[]){
        this.redux.dispatch( { type: UPDATELIST, accounts: accounts } );
    }

    calculatePrice(accounts:account[]){
        var price = 0;
        accounts.forEach(a => {
            if(a.active)
                price += a.subscription.price;
        });
        this.price = price;
    }

    calculateActiveAccounts(accounts: account[]){
        var active = 0;
        accounts.forEach(a => {
            if(a.active)
                active += 1;
        });
        this.activeAccounts = active;
    }

}
