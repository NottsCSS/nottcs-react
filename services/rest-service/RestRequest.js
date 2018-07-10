import { stringify } from 'querystring';
import { API_BASE_ADDRESS , CLIENT_ID, RESOURCE_ID} from '../../assets/AppConstants';
import { ReactNativeAD } from 'react-native-azure-ad';
import NavigationService from '../NavigationService';

/**
 * Attaches Credentials and required fields for fetch client
 * @param {string} method Request Method
 * @param {object} requestBody Request body for http request
 */
const setupClient = async(method, requestBody) => {

    const accessToken = await ReactNativeAD.getContext(CLIENT_ID)
        .assureToken(RESOURCE_ID);

    console.log('accessToken :', accessToken);

    //TODO: Desompose this into states instead of navigating inside RestService.js
    if (!accessToken) {
        NavigationService.navigate('login');
    }

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
export const RequestDataFromServer = async(resource, params = null) => {
    let address = API_BASE_ADDRESS + resource + (params ? '?' + stringify(params) : '');
    console.log('address :', address);
    
    return fetch(address, await setupClient('GET'));
}

//TODO: Verify if it works
/**
 * Sends a POST request and creates new data in server
 * @param {string} resource Target resource to create data
 * @param {object} requestBody Object data to be created
 */
export const CreateDataInServer = async(resource, requestBody = null) => {
    if (!requestBody) console.log('WARNING: Empty Request Body');
    let address = API_BASE_ADDRESS + resource;

    return fetch(address, await setupClient('POST', requestBody));
}

//TODO: Verify if it works
/**
 * Sends a PUT request and updates server data
 * @param {string} resource Target resource to update data
 * @param {object} params Additional parameters
 * @param {object} requestBody Object data to be updated
 */
export const UpdateDataInServer = async(resource, params = null, requestBody = null) => {
    if (!params) console.log('WARNING: Empty params');
    if (!requestBody) console.log('WARNING: Empty Request Body');

    let address = API_BASE_ADDRESS + resource + (params ? '?' + stringify(params) : '');

    return fetch(address, await setupClient('PUT', requestBody));
}

//TODO: Verify if it works
/**
 * Sends a DELETE request and deletes server data
 * @param {string} resource Target resource to delete data
 * @param {object} params Additional parameters
 */
export const DeleteDataInServer = async(resource, params = null) => {
    let address = API_BASE_ADDRESS + resource + (params ? '?' + stringify(params) : '');

    return fetch(address, await setupClient('DELETE'));
}