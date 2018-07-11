import * as ActionTypes from '../action-types/clubs';
import { RequestDataListFromServer, RequestDataItemFromServer } from '../../rest-service/RestRequest';
import { EVENTS, CLUBS } from '../../../assets/AppConstants';

/*================== Club List ===================== */


export const requestClubList = (optionalParams = null) => dispatch => {
    
    dispatch(startRequestClubList(optionalParams));

    return {
        type: ActionTypes.REQUEST_CLUB_LIST
    }
}

export const requestClubListSuccess = (clubList) => {
    return {
        type: ActionTypes.REQUEST_CLUB_LIST_SUCCESS,
        clubList,
    }
}

export const requestClubListFail = (errorMessage) => {
    return {
        type: ActionTypes.REQUEST_CLUB_LIST_FAIL,
        errorMessage,
    }
}

export const startRequestClubList = (optionalParams) => dispatch => {
    RequestDataListFromServer(CLUBS, optionalParams)
        .then(response => {
            if (response.status === 200) return response.json();
            else throw `${response.status} ${response.statusText}`;
        })
        .then(result => dispatch(requestClubListSuccess(result)))
        .catch(error => dispatch(requestClubListFail(error)));
}

/*================== Club ===================== */


export const requestClub = (identifier) => dispatch => {


    return {
        type: ActionTypes.REQUEST_CLUB,
    }
}

export const requestClubSuccess = (club) => {
    return {
        type: ActionTypes.REQUEST_CLUB_SUCCESS,
        club,
    }
}

export const requestClubFail = (errorMessage) => {
    return {
        type: ActionTypes.REQUEST_CLUB_FAIL,
        errorMessage,
    }
}

export const startRequestClub = (identifier) => dispatch => {
    RequestDataItemFromServer(CLUBS, identifier)
        .then(response => {
            if (response.status === 200) return response.json();
            else throw `${response.status} ${response.statusText}`;
        })
        .then(result => dispatch(requestClubSuccess(result)))
        .catch(error => dispatch(requestClubFail(error)));
}