import { FETCH_USER } from '../actions/types';

export default function(state = {}, action) {
    console.log("Action:", action)
    switch (action.type) {
        default:
            return state;
    }
}