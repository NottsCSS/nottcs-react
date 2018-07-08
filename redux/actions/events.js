import * as ActionTypes from '../action-types/events';
import {RequestDataFromServer} from '../../services/rest-service/RestRequest';
import {EVENTS} from '../../assets/AppConstants';

export const saveEvents = (events) => {
    return {
        type: ActionTypes.SAVE_EVENTS,
        events
    };
};

export const loadEventsFromServer = () => dispatch => {
    RequestDataFromServer(EVENTS)
        .then(response => response.json())
        .then(result => dispatch(saveEvents(result)))
        .catch(err => console.log('Fail to load server data'));
}