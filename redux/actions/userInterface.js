import * as ActionTypes from '../action-types/userInterface';

export const setAccentColor = (accentColor) => {
    return {
        type: ActionTypes.SET_ACCENT_COLOR,
        accentColor
    }
}

export const setPageTitle = (pageTitle) => {
    return {
        type: ActionTypes.SET_PAGE_TITLE,
        pageTitle
    }
}