import * as ActionTypes from '../action-types/user';
import {RequestDataFromServer} from '../../services/rest-service/RestRequest';
import { USER } from '../../assets/AppConstants';

export const saveUser = (user) => {
    return {
        type: ActionTypes.SAVE_USER,
        user
    };
};

export const getAndSaveUserData = () => dispatch => {
    RequestDataFromServer(USER)
        .then(response => response.json())
        .then(result => {console.log('result :', result); dispatch(saveUser(result))})
        .catch(err => console.log('Fail to get data'));
}