import * as ActionTypes from '../action-types/users';
import {RequestDataListFromServer, RequestDataItemFromServer} from '../../rest-service/RestRequest';
import { USER } from '../../../assets/AppConstants';


export const requestUser = () => dispatch => {

    dispatch(startRequestUser());

    return {
        type: ActionTypes.REQUEST_USER,
    }
}

export const requestUserSuccess = (user) => {
    return {
        type: ActionTypes.REQUEST_USER_SUCCESS,
        user,
    }
}

export const requestUserFail = (errorMessage) => {
    return {
        type: ActionTypes.REQUEST_USER_FAIL,
        errorMessage,
    }
}

export const startRequestUser = () => dispatch => {
    RequestDataItemFromServer(USER, null)
        .then(response => {
            if (response.status === 200) return response.json();
            else throw `${response.status} ${response.statusText}`;
        })
        .then(result => dispatch(requestUserSuccess(result)))
        .catch(error => dispatch(requestUserFail(error)));
}