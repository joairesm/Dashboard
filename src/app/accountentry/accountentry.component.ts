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
/**
 * Class responsible for each account card
 */
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
    
    /**
     * event handler when a new option is selected
     * @param event 
     */
    onOptionsSelected(event){
        var sub = subscriptions.find(s => s.name == event);
        this.redux.dispatch({ type: CHANGESUBSCRIPTION, 
                            account: this.accountInfo, 
                            subscription: sub});

    }
    /**
     * event handler for toggle button when commuted
     * @param result current value of the toggle button
     */
    onToggleChange(result:boolean){
        if(result){
            this.redux.dispatch( { type: ACTIVATE, account: this.accountInfo } );
        }else{
            this.redux.dispatch( { type: DEACTIVATE, account: this.accountInfo } );
        }
    }
}
