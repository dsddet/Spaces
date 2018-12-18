import { Action } from '@ngrx/store';

export const ADD_COIN = 'ADD_COIN';

export function addCoinReducer(state: any = { listings:[1,2,3,4,5],user:"deusdedit"}, action) {
    switch (action.type) {
        
        case 'ADD_LISTINGS':
            return { ...state, ...action.payload }
        case "NEW USER":
            return { ...state.listings, user: action.payload };
        default:
            return state;
    }
}

const INITIAL_STATE = {
    listings: [
        { _id: 1, Status: "pending", Price: 800 },
        { _id: 2, Status: "pending", Price: 800 },
        { _id: 3, Status: "pending", Price: 800 },
        { _id: 4, Status: "pending", Price: 800 },
        { _id: 5, Status: "pending", Price: 800 },
        { _id: 6, Status: "pending", Price: 800 },
        { _id: 7, Status: "pending", Price: 800 },
        { _id: 8, Status: "approved", Price: 800 },
        { _id: 9, Status: "approved", Price: 800 },
        { _id: 10, Status: "approved", Price: 800 },
        { _id: 11, Status: "approved", Price: 800 },
        { _id: 12, Status: "approved", Price: 800 },
        { _id: 13, Status: "approved", Price: 800 },
        { _id: 14, Status: "approved", Price: 800 }
    ]
}

export interface AppState {
    readonly listings: any[];
    readonly user: any;
}