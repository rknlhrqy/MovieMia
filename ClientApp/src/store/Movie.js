import { FETCH_MOVIES } from '../actions/types';

export default (state = {}, action) => {
    
    switch (action.type) {
        case FETCH_MOVIES:
            //return Object.assign({}, state, {movie: action.payload});
            return { ...state, movie: action.payload };
        default:
            return state;
    }
};
