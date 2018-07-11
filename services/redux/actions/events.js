import * as ActionTypes from '../action-types/events';
import {RequestDataListFromServer, RequestDataItemFromServer} from '../../rest-service/RestRequest';
import { EVENTS } from '../../../assets/AppConstants';

export const requestEventList = (optionalParams = null) => dispatch => {

    dispatch(startRequestEventList(optionalParams));

    return {
        type: ActionTypes.REQUEST_EVENT_LIST,
    }
}

export const requestEventListSuccess = (eventList) => {
    return {
        type: ActionTypes.REQUEST_EVENT_LIST_SUCCESS,
        eventList,
    }
}

export const requestEventListFail = (errorMessage) => {
    return {
        type: ActionTypes.REQUEST_EVENT_LIST_FAIL,
        errorMessage,
    }
}

export const startRequestEventList = (optionalParams) => dispatch => {
    RequestDataListFromServer(EVENTS, optionalParams)
        .then(response => {
            if (response.status === 200) return response.json();
            else throw `${response.status} ${response.statusText}`;
        })
        .then(result => dispatch(requestEventListSuccess(result)))
        .catch(error => dispatch(requestEventListFail(error)));
}



export const requestEvent = (identifier) => dispatch => {

    dispatch(startRequestEvent(identifier));

    return {
        type: ActionTypes.REQUEST_EVENT,
    }
}

export const requestEventSuccess = (event) => {
    return {
        type: ActionTypes.REQUEST_EVENT_SUCCESS,
        event,
    }
}

export const requestEventFail = (errorMessage) => {
    return {
        type: ActionTypes.REQUEST_EVENT_FAIL,
        errorMessage,
    }
}

export const startRequestEvent = (identifier) => dispatch => {
    RequestDataItemFromServer(EVENTS, identifier)
        .then(response => {
            if (response.status === 200) return response.json();
            else throw `${response.status} ${response.statusText}`;
        })
        .then(result => dispatch(requestEventSuccess(result)))
        .catch(error => dispatch(requestEventFail(error)));
}