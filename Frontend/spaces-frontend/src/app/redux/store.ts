import { Action } from '@ngrx/store';

export const ADD_COIN = 'ADD_COIN';

export function addCoinReducer(state:any={}, action) {
    switch (action.type) {
        
        case 'ADD_LISTINGS':
            return { ...state, ...action.payload }
        case "NEW USER":
            return { ...state.listings, user: action.payload };
        default:
            return state;
    }
}

// const INITIAL_STATE = {
//     blockchain: [{ name: 'Ethereum', price: 1000 },
//     { name: 'Bitcoin', price: 2000 },
//     { name: 'Ripple', price: 3000 },
//     ], words: "This is good"
// }

// export interface Blockchain {
//     name: string;
//     price: number;
// }

export interface AppState {
    readonly listings: any[];
    readonly user: any;
}