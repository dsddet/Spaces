import { Action } from '@ngrx/store';

export const ADD_COIN = 'ADD_COIN';

export function addCoinReducer(state: Blockchain[] =INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_COIN:
            return [...state, action.payload];
        default:
            return state;
    }
}

const INITIAL_STATE = [{ name: 'Ethereum', price: 1000 },
{ name: 'Bitcoin', price: 2000 },
    { name: 'Ripple', price: 3000 },
];

export interface Blockchain {
    name: string;
    price: number;
}

export interface AppState {
    readonly blockchain: any[];
    readonly words: any;
}