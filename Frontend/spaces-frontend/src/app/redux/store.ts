import { Action } from '@ngrx/store';

export const ADD_COIN = 'ADD_COIN';

export function addCoinReducer(state: any = INITIAL_STATE, action) {
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
        { _id: 1, Status: "pending", Price: 800, Details: { name: "Utopia Park in Fairfield, Iowa.", address: "1000N 4th Street" } },
        { _id: 2, Status: "pending", Price: 800, Details: { name: "Utopia Park in Fairfield, Iowa.", address: "1000N 4th Street" } },
        { _id: 3, Status: "pending", Price: 800, Details: { name: "Utopia Park in Fairfield, Iowa.", address: "1000N 4th Street" } },
        { _id: 4, Status: "pending", Price: 800, Details: { name: "Utopia Park in Fairfield, Iowa.", address: "1000N 4th Street" } },
        { _id: 5, Status: "pending", Price: 800, Details: { name: "Utopia Park in Fairfield, Iowa.", address: "1000N 4th Street" } },
        { _id: 6, Status: "pending", Price: 800, Details: { name: "Utopia Park in Fairfield, Iowa.", address: "1000N 4th Street" } },
        { _id: 7, Status: "pending", Price: 800, Details: { name: "Utopia Park in Fairfield, Iowa.", address: "1000N 4th Street" } },
        { _id: 8, Status: "approved", Price: 800, Details: { name: "Utopia Park in Fairfield, Iowa.", address: "1000N 4th Street" } },
        { _id: 9, Status: "approved", Price: 800, Details: { name: "Utopia Park in Fairfield, Iowa.", address: "1000N 4th Street" } },
        { _id: 10, Status: "approved", Price: 800, Details: { name: "Utopia Park in Fairfield, Iowa.", address: "1000N 4th Street" } },
        { _id: 11, Status: "approved", Price: 800, Details: { name: "Utopia Park in Fairfield, Iowa.", address: "1000N 4th Street" } },
        { _id: 12, Status: "approved", Price: 800, Details: { name: "Utopia Park in Fairfield, Iowa.", address: "1000N 4th Street" } },
        { _id: 13, Status: "approved", Price: 800, Details: { name: "Utopia Park in Fairfield, Iowa.", address: "1000N 4th Street" } },
        { _id: 14, Status: "approved", Price: 800, Details: { name: "Utopia Park in Fairfield, Iowa.", address: "1000N 4th Street" } }
    ],
    user:"Deusdedit"
}

export interface AppState {
    readonly listings: any[];
    readonly user: any;
}