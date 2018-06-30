import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import EventList from '../components/EventList';

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
	}

	componentDidMount() {
		this.setState({eventList: ExampleEvents});
	}

	render() {
		return (
			this.state.eventList
			?
				<View style={{flex: 1}}>
					<EventList eventList={this.state.eventList}/>
				</View>
			:
				<View>
					<Text>Please wait while we pull some data...</Text>
				</View>
		)
	}
}

export default ClubEventsPage;