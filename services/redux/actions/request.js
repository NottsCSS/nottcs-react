import * as ActionTypes from "../action-types/request";
import { getData, postData, putData, deleteData } from "../../rest/RestRequest";

/**
 * Performs a GET request to server and retrieve data
 * @param {string} resource API resource to request
 * @param {object} params Additional request parameters in object form
 * @param {string} target Allocated name for the request result in "data" state
 */
export const requestData = (resource, params, target) => dispatch => {
    dispatch(requestDataStart(target));

    getData(resource, params)
        .then(response => {
            if (response.status === 200) return response.json();
            else throw new Error(`${response.status} ${response.statusText}`);
        })
        .then(result => dispatch(requestDataSuccess(result, target)))
        .catch(errorMessage => dispatch(requestDataFail(errorMessage, target)));
};

const requestDataStart = target => {
    return {
        type: ActionTypes.REQUEST_DATA_START,
        target
    };
};

const requestDataSuccess = (result, target) => {
    return {
        type: ActionTypes.REQUEST_DATA_SUCCESS,
        result,
        target
    };
};

const requestDataFail = (errorMessage, target) => {
    return {
        type: ActionTypes.REQUEST_DATA_FAIL,
        errorMessage,
        target
    };
};

/**
 * Performs a POST request to server and create data in server
 * @param {string} resource API resource to request
 * @param {object} requestBody Data to create in server
 * @param {string} target Allocated name for the request result in "data" state
 */
export const createData = (resource, requestBody, target) => dispatch => {
    dispatch(createDataStart(target));

    postData(resource, requestBody)
        .then(response => {
            if (response.status >= 200 && response.status < 300)
                return response.json();
            else throw new Error(`${response.status} ${response.statusText}`);
        })
        .then(result => dispatch(createDataSuccess(result, target)))
        .catch(errorMessage => dispatch(createDataFail(errorMessage, target)));
};

const createDataStart = target => {
    return {
        type: ActionTypes.REQUEST_DATA_START,
        target
    };
};

const createDataSuccess = (result, target) => {
    return {
        type: ActionTypes.CREATE_DATA_SUCCESS,
        result,
        target
    };
};

const createDataFail = (errorMessage, target) => {
    return {
        type: ActionTypes.CREATE_DATA_FAIL,
        errorMessage,
        target
    };
};

/**
 * Performs a PUT request to server and updates data in server
 * @param {string} resource API resource to be requested
 * @param {object} params Additional request parameters in object form
 * @param {object} requestBody Data to be updated
 * @param {string} target Allocated name for the resquest result in "data" state
 */
export const updateData = (
    resource,
    params,
    requestBody,
    target
) => dispatch => {
    dispatch(updateDataStart(target));

    putData(resource, params, requestBody)
        .then(response => {
            if (response.status >= 200 && response.status < 300)
                return response.json();
            else throw new Error(`${response.status} ${response.statusText}`);
        })
        .then(result => dispatch(updateDataSuccess(result, target)))
        .catch(errorMessage => dispatch(updateDataFail(errorMessage, target)));
};

const updateDataStart = target => {
    return {
        type: ActionTypes.UPDATE_DATA_START,
        target
    };
};

const updateDataSuccess = (result, target) => {
    return {
        type: ActionTypes.UPDATE_DATA_SUCCESS,
        result,
        target
    };
};

const updateDataFail = (errorMessage, target) => {
    return {
        type: ActionTypes.UPDATE_DATA_FAIL,
        errorMessage,
        target
    };
};

/**
 * Performs a DELETE request to server and remove data in server
 * @param {string} resource API resource to request
 * @param {object} params Additional request parameters in object form
 * @param {string} target Allocated name for the request result in "data" state
 */
export const removeData = (resource, params, target) => dispatch => {
    dispatch(removeDataStart(target));

    deleteData(resource, params)
        .then(response => {
            if (response.status >= 200 && response.status < 300)
                return response.json();
            else throw new Error(`${response.status} ${response.statusText}`);
        })
        .then(result => dispatch(removeDataSuccess(result, target)))
        .catch(errorMessage => dispatch(removeDataFail(errorMessage, target)));
};

const removeDataStart = target => {
    return {
        type: ActionTypes.REMOVE_DATA_START,
        target
    };
};

const removeDataSuccess = (result, target) => {
    return {
        type: ActionTypes.REMOVE_DATA_SUCCESS,
        result,
        target
    };
};

const removeDataFail = (errorMessage, target) => {
    return {
        type: ActionTypes.REMOVE_DATA_FAIL,
        errorMessage,
        target
    };
};
