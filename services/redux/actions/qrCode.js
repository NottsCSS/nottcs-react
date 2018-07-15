import * as ActionTypes from "../action-types/qrCode";

export const saveQrCode = (name, createdTime, data) => {
    return {
        type: ActionTypes.SAVE_QR_CODE,
        name,
        createdTime,
        data
    };
};

export const verifyQrCode = data => {
    return {
        type: ActionTypes.VERIFY_QR_CODE,
        data
    };
};
