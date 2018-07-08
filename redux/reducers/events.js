import * as ActionTypes from '../action-types/events';

export const events = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SAVE_EVENTS: {
            return Object.assign({}, state, {
                events: action.events
            });
        }
        default: {
            return state;
        }
    }
}