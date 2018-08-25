import { combineReducers } from "redux";
import { request } from "./request";
import {qrCode} from './qrCode';

export const APP_STORE = combineReducers({
    request,
    qrCode
});
