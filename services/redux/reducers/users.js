import * as ActionTypes from '../action-types/users';

export const users = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.REQUEST_USER: {
            return Object.assign({}, state, {
                error: false,
                errorMessage: null,
                _loaded: false,
            });
        }
        case ActionTypes.REQUEST_USER_SUCCESS: {
            return Object.assign({}, state, {
                error: false,
                errorMessage: null,
                _loaded: true,
                user: action.user,
            });
        }
        case ActionTypes.REQUEST_USER_FAIL: {
            return Object.assign({}, state, {
                error: true,
                errorMessage: action.errorMessage,
                _loaded: true,
            });
        }
        default: {
            return state;
        }
    }
}