import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { createMaterialTopTabNavigator } from 'react-navigation';
import {CLUB_LIST_ACCENT} from '../assets/AppConstants';
import ClubDescriptionPage from './ClubDescriptionPage';
import ClubEventsPage from './ClubEventsPage';
import { getStatusBarHeight } from 'react-native-status-bar-height';


const ClubStack = createMaterialTopTabNavigator({
	description: {
		screen: ClubDescriptionPage
	},
	event: {
		screen: ClubEventsPage
	}
},
{
	tabBarOptions: {
		style: {
			backgroundColor: CLUB_LIST_ACCENT,
		}
	},
	backBehavior: 'none',
})

const ClubPage = ({accentColor}) => {
	return (
		<View style={{flex: 1}}>
			<View style={{height: getStatusBarHeight(), backgroundColor: accentColor}}/>
			<View style={{flex: 1}}>
				<ClubStack/>
			</View>
		</View>
	)
}

export default ClubPage;