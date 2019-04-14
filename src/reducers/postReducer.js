import {FETCH_POSTS} from '../actions/types';

const initialState = {
    items:[],
    item:{},
};

export default function(state = initialState,action){
    console.log(action.type);

    switch(action.type){
        case 'FETCH_POSTS':
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}
