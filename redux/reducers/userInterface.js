import * as ActionTypes from '../action-types/userInterface';

const InitialState = {
    pageTitle: 'NottCS',
    accentColor: ''
}

export const userInterface = (state = InitialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_ACCENT_COLOR: {
            return Object.assign({}, state, {accentColor: action.accentColor});
        }
        case ActionTypes.SET_PAGE_TITLE: {
            return Object.assign({}, state, {pageTitle: action.pageTitle});
        }
        default: {
            return state;
        }
    }
}