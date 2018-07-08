import * as ActionTypes from '../action-types/clubs';
import {RequestDataFromServer} from '../../services/rest-service/RestRequest';
import { CLUBS , EVENTS} from '../../assets/AppConstants';

export const saveClubs = (clubs) => {
    return {
        type: ActionTypes.SAVE_CLUBS,
        clubs
    };
};

export const saveClubEvents = (clubEvents) => {
    return {
        type: ActionTypes.SAVE_CLUB_EVENTS,
        clubEvents
    }
}

export const loadClubsFromServer = () => dispatch => {
    RequestDataFromServer(CLUBS)
        .then(response => response.json())
        .then(result => dispatch(saveClubs(result)))
        .catch(err => console.log('Unable to load data from server'));
}

export const loadClubEventsFromServer = (clubName) => dispatch => {
    RequestDataFromServer(EVENTS, {club_name: clubName})
        .then(response => response.json())
        .then(result => dispatch(saveClubEvents(result)))
        .catch(err => console.log('Unable to get data'));
}