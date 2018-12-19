import { ACTIVATE, DEACTIVATE, UPDATELIST, CHANGESUBSCRIPTION } from './actions';
import { tassign} from 'tassign';
import { account } from './Models/account';

export interface IAppState {
    accounts: account[]
}

export const INITIALSTATE: IAppState = {
    accounts: []
}

/**
 * This function is the Store of the Redux state manangement system
 * @param state current state of the application
 * @param action action to apply to the state of the application
 */
export function rootReducer(state: IAppState, action): IAppState{
    switch(action.type){
        case ACTIVATE: return activateSerivce(state,action);
        case DEACTIVATE: return deactivateSerivce(state,action);
        case UPDATELIST: return updateService(state,action);
        case CHANGESUBSCRIPTION: return changeSubscription(state, action);
    }
    return state;
}
/**
 * Reducer to activate a subscription
 * @param state current state of the application
 * @param action action to apply to the state of the application
 */
function activateSerivce(state:IAppState, action){
    var newlist = state.accounts;
    var index = newlist.indexOf(action.account);
    newlist[index].active = true;   
    return tassign(state, {accounts: newlist});
}
/**
 * Reducer to deactivate a subscription
 * @param state current state of the application
 * @param action action to apply to the state of the application
 */
function deactivateSerivce(state:IAppState, action){
    var newlist = state.accounts;
    var index = newlist.indexOf(action.account);
    newlist[index].active = false;   
    return tassign(state, {accounts: newlist});
}
/**
 * Reducer to update all the subscription
 * @param state current state of the application
 * @param action action to apply to the state of the application
 */
function updateService(state, action){
    return tassign(state, {accounts: action.accounts});
}
/**
 * Reducer to change a subscription plan
 * @param state current state of the application
 * @param action action to apply to the state of the application
 */
function changeSubscription(state, action) {
    var newlist = state.accounts;
    var account = newlist.find( a => a == action.account)
    account.subscription = action.subscription;
    return tassign(state, {accounts: newlist});
}