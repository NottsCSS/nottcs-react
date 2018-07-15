import { WEB_CONFIG, setupClient } from "./RestConfig";
import { stringify } from "querystring";

export const getData = async (resource, params) => {
    let address = `${WEB_CONFIG.baseAddress}${resource}${
        params ? "?" + stringify(params) : ""
    }`;

    return fetch(address, await setupClient(WEB_CONFIG.methods.GET));
};

export const postData = async (resource, requestBody) => {
    let address = `${WEB_CONFIG.baseAddress}${resource}`;

    return fetch(
        address,
        await setupClient(WEB_CONFIG.methods.POST, requestBody)
    );
};

export const putData = async (resource, params, requestBody) => {
    let address = `${WEB_CONFIG.baseAddress}${resource}${
        params ? "?" + stringify(params) : ""
    }`;

    return fetch(
        address,
        await setupClient(WEB_CONFIG.methods.PUT, requestBody)
    );
};

export const deleteData = async (resource, params) => {
    let address = `${WEB_CONFIG.baseAddress}${resource}${
        params ? "?" + stringify(params) : ""
    }`;

    return fetch(address, await setupClient(WEB_CONFIG.methods.DELETE));
};
