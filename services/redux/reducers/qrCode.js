import * as ActionTypes from "../action-types/qrCode";

const INITIAL_STATE = {
    savedQrCode: []
};

export const qrCode = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SAVE_QR_CODE: {
            let qrCode = {
                name: action.name,
                createdTime: action.createdTime,
                data: action.data,
                verified: false
            };
            return Object.assign({}, state, {
                savedQrCode: [...state.savedQrCode, qrCode]
            });
        }
        case ActionTypes.VERIFY_QR_CODE: {
            let newSavedQrCode = state.savedQrCode.map(qrCode => {
                if (qrCode.data === action.data) {
                    return Object.assign({}, qrCode, {
                        verified: true
                    });
                } else {
                    return qrCode;
                }
            });
            return Object.assign({}, state, {
                savedQrCode: newSavedQrCode
            });
        }
        default: {
            return state;
        }
    }
};
