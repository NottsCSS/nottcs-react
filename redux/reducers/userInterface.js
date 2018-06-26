import * as ActionTypes from '../action-types/userInterface';

const InitialState = {
    pageTitle: 'NottCS',
    accentColor: '',
    navigator: {},
}

export const userInterface = (state = InitialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_ACCENT_COLOR: {
            return Object.assign({}, state, {accentColor: action.accentColor});
        }
        case ActionTypes.SET_PAGE_TITLE: {
            return Object.assign({}, state, {pageTitle: action.pageTitle});
        }
        case ActionTypes.SET_ROOT_STACK: {
            return Object.assign({}, state, {navigation: action.navigator});
        }
        default: {
            return state;
        }
    }
}