import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import EventList from '../components/EventList';
import AppStore from '../redux/reducers';
import {connect} from 'react-redux';
import {loadClubEventsFromServer} from '../redux/actions/clubs';
import LoadingPage from './LoadingPage';

const ExampleEvents = [
	{
        id: 1,
        title: 'Make() 2018',
        description: 'Make() 2018 is back again! Create your software project and pitch to investors!',
        imageSource: 'http://d.wildapricot.net/images/newsblog/build-vs-buy-membership-management-software.jpg',
    },
    {
        id: 2,
        title: 'Hackathon',
        description: `Hack your way to NSA's server!`,
        imageSource: 'https://www.serenova.com/sites/default/files/serenova_hackathon_2017_logo-web.png',
    },
]

class ClubEventsPage extends React.Component {

	state = {
		eventList: null,
		_loaded: false,
	}

	componentDidMount() {
		this.props.dispatch(loadClubEventsFromServer(`Nott's Makers Club`));
	}

	componentDidUpdate() {
		if (!this.state._loaded) {
			let newState = Object.assign({}, this.state, {
				eventList: this.props.clubEvents.results,
				_loaded: true
			});
			this.setState(newState);
		}
	}

	render() {
		return (
			this.state._loaded
			?
				<View style={{flex: 1}}>
					<EventList eventList={this.state.eventList}/>
				</View>
			:
				<LoadingPage/>
		)
	}
}

export default connect(AppStore => AppStore.clubs)(ClubEventsPage);