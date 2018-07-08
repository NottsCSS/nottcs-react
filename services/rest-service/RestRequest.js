import { stringify } from 'querystring';
import { API_BASE_ADDRESS } from '../../assets/AppConstants';
import {store} from '../../App';

/**
 * Attaches Credentials and required fields for fetch client
 * @param {string} method Request Method
 * @param {object} requestBody Request body for http request
 */
const setupClient = (method, requestBody) => {

    const accessToken = store.getState().credentials.accessToken.valueOf();

    return {
        method: method,
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
        body: requestBody,
    }
}

/**
 * Requests a GET from server
 * @param {string} resource Target resource to fetch data
 * @param {object} params Additional parameters for GET request
 */
export const RequestDataFromServer = (resource, params = null) => {
    let address = API_BASE_ADDRESS + resource + (params ? '?' + stringify(params) : '');
    
    return fetch(address, setupClient('GET'));
}

//TODO: Verify if it works
/**
 * Sends a POST request and creates new data in server
 * @param {string} resource Target resource to create data
 * @param {object} requestBody Object data to be created
 */
export const CreateDataInServer = (resource, requestBody = null) => {
    if (!requestBody) console.log('WARNING: Empty Request Body');
    let address = API_BASE_ADDRESS + resource;

    return fetch(address, setupClient('POST', requestBody));
}

//TODO: Verify if it works
/**
 * Sends a PUT request and updates server data
 * @param {string} resource Target resource to update data
 * @param {object} params Additional parameters
 * @param {object} requestBody Object data to be updated
 */
export const UpdateDataInServer = (resource, params = null, requestBody = null) => {
    if (!params) console.log('WARNING: Empty params');
    if (!requestBody) console.log('WARNING: Empty Request Body');

    let address = API_BASE_ADDRESS + resource + (params ? '?' + stringify(params) : '');

    return fetch(address, setupClient('PUT', requestBody));
}

//TODO: Verify if it works
/**
 * Sends a DELETE request and deletes server data
 * @param {string} resource Target resource to delete data
 * @param {object} params Additional parameters
 */
export const DeleteDataInServer = (resource, params = null) => {
    let address = API_BASE_ADDRESS + resource + (params ? '?' + stringify(params) : '');

    return fetch(address, setupClient('DELETE'));
}