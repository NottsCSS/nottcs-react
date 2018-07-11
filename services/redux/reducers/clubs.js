import * as ActionTypes from '../action-types/clubs';

export const clubs = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.REQUEST_CLUB_LIST: {
            return Object.assign({}, state, {
                error: false,
                errorMessage: null,
                _loaded: false,
            });
        }
        case ActionTypes.REQUEST_CLUB_LIST_SUCCESS: {
            return Object.assign({}, state, {
                error: false,
                errorMessage: null,
                _loaded: true,
                clubList: action.clubList,
            });
        }
        case ActionTypes.REQUEST_CLUB_LIST_FAIL: {
            return Object.assign({}, state, {
                error: true,
                errorMessage: action.errorMessage,
                _loaded: true,
            });
        }
        case ActionTypes.REQUEST_CLUB: {
            return Object.assign({}, state, {
                error: false,
                errorMessage: null,
                _loaded: false,
            });
        }
        case ActionTypes.REQUEST_CLUB_SUCCESS: {
            return Object.assign({}, state, {
                error: false,
                errorMessage: null,
                _loaded: true,
                club: action.club,
            });
        }
        case ActionTypes.REQUEST_CLUB_FAIL: {
            return Object.assign({}, state, {
                error: true,
                errorMessage: action.errorMessage,
                _loaded: true,
            })
        }
        default: {
            return state;
        }
    }
}