import { ReactNativeAD } from "react-native-azure-ad";
import {CLIENT_ID, RESOURCE_ID} from '../../assets/AppConstants';

export const GET = 'GET';
export const POST = 'POST';
export const PUT = 'PUT';
export const DELETE = 'DELETE';

/**
 * Attaches Credentials and required fields for fetch client
 * @param {string} method Request Method
 * @param {object} requestBody Request body for http request
 */
export const setupClient = async(method, requestBody = null) => {

    if ((method === POST || method === PUT) && !requestBody) throw `Invalid request body for PUT/POST request`;

    let accessToken = await ReactNativeAD.getContext(CLIENT_ID)
        .assureToken(RESOURCE_ID);

    if (!accessToken) throw `Token fail`;

    return {
        method: method,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
        body: requestBody
    }
}