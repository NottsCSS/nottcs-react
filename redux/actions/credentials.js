import * as ActionTypes from '../action-types/credentials';

export const saveCredentials = (credentials) => {
    return {
        type: ActionTypes.SAVE_CREDENTIALS,
        credentials,
    };
};