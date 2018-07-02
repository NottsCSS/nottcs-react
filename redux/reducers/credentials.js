import * as ActionTypes from '../action-types/credentials';
import { AsyncStorage } from 'react-native';

const ACCESS_TOKEN = 'ACCESS_TOKEN';
const REFRESH_TOKEN = 'REFRESH_TOKEN';
const EXPIRES_ON = 'EXPIRES_ON';

const InitialState = {
    accessToken: '',
    expiresOn: null,
    refreshToken: '',
}

export const credentials = (state = InitialState, action) => {
    switch (action.type) {
        case ActionTypes.SAVE_CREDENTIALS: {

            const credentialDetails = {
                accessToken: action.credentials.access_token,
                refreshToken: action.credentials.refresh_token,
                expiresOn: action.credentials.expires_on,
            };

            return Object.assign({}, state, credentialDetails);
        }

        case ActionTypes.RETRIEVE_CREDENTIALS: {

            let storageCredentials = {}

            //TODO: Do local storage stuff here

            return Object.assign({}, state, storageCredentials);
        }

        default: {
            return state;
        }
    }
}