import {subscription} from '../Models/subscription';

export const subscriptions: subscription[] = [
    {
        name: 'Basic',
        description:'5GB data + 120m calls',
        price:100
    },
    {
        name: 'Large',
        description:'50GB data + 500m calls',
        price:200
    },
    {
        name: 'Unlimited',
        description:'unlimited data + 500m calls international',
        price:500
    }
]