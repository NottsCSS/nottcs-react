import * as ActionTypes from '../action-types/events';

export const events = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.REQUEST_EVENT_LIST: {
            return Object.assign({}, state, {
                error: false,
                errorMessage: null,
                _loaded: false,
            });
        }
        case ActionTypes.REQUEST_EVENT_LIST_SUCCESS: {
            return Object.assign({}, state, {
                error: false,
                errorMessage: null,
                _loaded: true,
                eventList: action.eventList,
            });
        }
        case ActionTypes.REQUEST_EVENT_LIST_FAIL: {
            return Object.assign({}, state, {
                error: true,
                errorMessage: action.errorMessage,
                _loaded: true,
            });
        }
        case ActionTypes.REQUEST_EVENT: {
            return Object.assign({}, state, {
                error: false,
                errorMessage: null,
                _loaded: false,
            });
        }
        case ActionTypes.REQUEST_EVENT_SUCCESS: {
            return Object.assign({}, state, {
                error: false,
                errorMessage: null,
                _loaded: true,
                event: action.event,
            });
        }
        case ActionTypes.REQUEST_EVENT_FAIL: {
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