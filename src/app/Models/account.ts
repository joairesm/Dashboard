import { subscription } from './subscription';

export interface account{
    number: number;
    subscription: subscription;
    active: boolean;
}