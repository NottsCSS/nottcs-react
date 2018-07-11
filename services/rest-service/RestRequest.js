import { stringify } from 'querystring';
import { API_BASE_ADDRESS , CLIENT_ID, RESOURCE_ID} from '../../assets/AppConstants';
import { setupClient, GET, POST, PUT, DELETE } from './RestConfig';

/**
 * Requests a GET from server to obtain data list
 * @param {string} resource Target resource to fetch data
 * @param {object} params Additional parameters for GET request
 */
export const RequestDataFromServer = async(resource, params = null) => {
    let address = API_BASE_ADDRESS + resource + (params ? '?' + stringify(params) : '');
    
    return fetch(address, await setupClient(GET));
}

/**
 * Requests a GET from server to obtain data list
 * @param {string} resource Target resource to fetch data
 * @param {object} params Additional parameters for GET request
 */
export const RequestDataListFromServer = async(resource, params = null) => {
    let address = API_BASE_ADDRESS + resource + (params ? '?' + stringify(params) : '');
    
    return fetch(address, await setupClient(GET));
}

/**
 * Request a GET from server to obtain single data object
 * @param {string} resource Target resource to fetch data
 * @param {string} identifier Id of the object
 */
export const RequestDataItemFromServer = async(resource, identifier) => {
    let address = `${API_BASE_ADDRESS}${resource}/${identifier}`;

    return fetch(address, await setupClient(GET));
}

//TODO: Verify if it works
/**
 * Sends a POST request and creates new data in server
 * @param {string} resource Target resource to create data
 * @param {object} requestBody Object data to be created
 */
export const CreateDataInServer = async(resource, requestBody = null) => {
    let address = API_BASE_ADDRESS + resource;

    return fetch(address, await setupClient(POST, requestBody));
}

//TODO: Verify if it works
/**
 * Sends a PUT request and updates server data
 * @param {string} resource Target resource to update data
 * @param {object} params Additional parameters
 * @param {object} requestBody Object data to be updated
 */
export const UpdateDataInServer = async(resource, params = null, requestBody = null) => {

    let address = API_BASE_ADDRESS + resource + (params ? '?' + stringify(params) : '');

    return fetch(address, await setupClient(PUT, requestBody));
}

//TODO: Verify if it works
/**
 * Sends a DELETE request and deletes server data
 * @param {string} resource Target resource to delete data
 * @param {object} params Additional parameters
 */
export const DeleteDataInServer = async(resource, params = null) => {
    let address = API_BASE_ADDRESS + resource + (params ? '?' + stringify(params) : '');

    return fetch(address, await setupClient(DELETE));
}