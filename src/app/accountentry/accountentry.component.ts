import { Component, Input } from '@angular/core';
import { account } from '../Models/account';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';
import { ACTIVATE, DEACTIVATE } from '../actions';
import { subscription } from '../Models/subscription';
import { subscriptions } from '../services/subscriptions';

@Component({
    selector: 'app-accountentry',
    templateUrl: './accountentry.component.html',
    styleUrls: ['./accountentry.component.scss']
})
export class AccountEntryComponent{

    @Input('account') accountInfo: account;

    subscriptions: subscription[];
    optionSelected: string;

    constructor(private redux: NgRedux<IAppState>){
        this.subscriptions = subscriptions
        this.optionSelected = 'Large - 50GB data + 500m calls';
    }

    onOptionsSelected(event){
        console.log(event + ' + ' + this.optionSelected); //option value will be sent as event
    }

    onToggleChange(result:boolean){
        if(result){
            this.redux.dispatch( { type: ACTIVATE, account: this.accountInfo } );
        }else{
            this.redux.dispatch( { type: DEACTIVATE, account: this.accountInfo } );
        }
    }

    onSelect(){
        console.log( " - " );
        
    }
}
