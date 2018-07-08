import * as ActionTypes from '../action-types/clubs';

export const clubs = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SAVE_CLUBS: {
            return Object.assign({}, state, {
                clubs: action.clubs
            });
        }
        case ActionTypes.SAVE_CLUB_EVENTS: {
            return Object.assign({}, state, {
                clubEvents: action.clubEvents
            });
        }
        default: {
            return state;
        }
    }
}