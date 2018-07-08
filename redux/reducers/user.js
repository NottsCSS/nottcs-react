import * as ActionTypes from '../action-types/user';

export const user = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SAVE_USER: {
            return Object.assign({}, state, {
                user: action.user
            });
        }
        default: {
            return state;
        }
    }
}