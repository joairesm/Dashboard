import { account } from '../Models/account';

export const data: account[] = [
    {
        number: 323232332,
        active: true,
        subscription: {
            name: 'Basic',
            description:'5GB data + 120m calls',
            price:100
        }
    },
    {
        number: 32323,
        active: false,
        subscription: {
            name: 'Large',
            description:'50GB data + 500m calls',
            price:200
        }
    },
    {
        number: 12312313,
        active: true,
        subscription: {
            name: 'Unlimited',
            description:'unlimited data + 500m calls international',
            price:500
        }
    }
]