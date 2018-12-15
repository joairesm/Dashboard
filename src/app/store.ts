import { ACTIVATE, DEACTIVATE, UPDATELIST } from './actions';
import { tassign} from 'tassign';
import { account } from './Models/account';

export interface IAppState {
    accounts: account[]
}

export const INITIALSTATE: IAppState = {
    accounts: []
}

export function rootReducer(state: IAppState, action): IAppState{
    switch(action.type){
        case ACTIVATE: return activateSerivce(state,action);
        case DEACTIVATE: return deactivateSerivce(state,action);
        case UPDATELIST: return updateService(state,action);
    }
    return state;
}

function activateSerivce(state:IAppState, action){
    var newlist = state.accounts;
    var index = newlist.indexOf(action.account);
    newlist[index].active = true;   
    return tassign(state, {accounts: newlist});
}

function deactivateSerivce(state:IAppState, action){
    var newlist = state.accounts;
    var index = newlist.indexOf(action.account);
    newlist[index].active = false;   
    return tassign(state, {accounts: newlist});
}

function updateService(state, action){
    return tassign(state, {accounts: action.accounts});
}