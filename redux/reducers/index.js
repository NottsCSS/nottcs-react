import { combineReducers } from 'redux';
import { credentials } from './credentials';
import {user} from './user';
import {events} from './events';
import {clubs} from './clubs';

export default combineReducers({
    credentials,
    user,
    events,
    clubs,
});