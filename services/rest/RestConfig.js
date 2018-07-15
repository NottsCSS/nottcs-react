import { ReactNativeAD } from "react-native-azure-ad";
import {
    CLIENT_ID,
    API_BASE_ADDRESS,
    RESOURCE_ID
} from "../../assets/AppConstants";

export const WEB_CONFIG = {
    baseAddress: API_BASE_ADDRESS,
    methods: {
        GET: "GET",
        POST: "POST",
        PUT: "PUT",
        DELETE: "DELETE"
    }
};

export const setupClient = async (httpMethod, requestBody = null) => {
    if (
        (httpMethod === WEB_CONFIG.methods.POST ||
            httpMethod === WEB_CONFIG.methods.PUT) &&
        !requestBody
    )
        throw new Error("Invalid request body for PUT/POST request");

    let accessToken = await ReactNativeAD.getContext(CLIENT_ID).assureToken(
        RESOURCE_ID
    );

    if (!accessToken) throw new Error("Token fail");

    return {
        method: httpMethod,
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        body: requestBody && JSON.stringify(requestBody)
    };
};
