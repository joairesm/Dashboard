import { Component, Input, OnInit } from '@angular/core';
import { account } from '../Models/account';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';
import { ACTIVATE, DEACTIVATE, CHANGESUBSCRIPTION } from '../actions';
import { subscription } from '../Models/subscription';
import { subscriptions } from '../services/subscriptions';

@Component({
    selector: 'app-accountentry',
    templateUrl: './accountentry.component.html',
    styleUrls: ['./accountentry.component.scss']
})
export class AccountEntryComponent implements OnInit{

    @Input('account') accountInfo: account;

    subscriptions: subscription[];
    optionselected: string;


    ngOnInit(): void {
        
        this.optionselected = this.accountInfo.subscription.name
        
    }

    constructor(private redux: NgRedux<IAppState>){
        this.subscriptions = subscriptions
    }

    onOptionsSelected(event){
        var sub = subscriptions.find(s => s.name == event);
        this.redux.dispatch({ type: CHANGESUBSCRIPTION, 
                            account: this.accountInfo, 
                            subscription: sub});

    }

    onToggleChange(result:boolean){
        if(result){
            this.redux.dispatch( { type: ACTIVATE, account: this.accountInfo } );
        }else{
            this.redux.dispatch( { type: DEACTIVATE, account: this.accountInfo } );
        }
    }
}
