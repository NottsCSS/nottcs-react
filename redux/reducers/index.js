import { combineReducers } from 'redux';
import { credentials } from './credentials';
import {user} from './user';

export default combineReducers({
    credentials,
    user,
});