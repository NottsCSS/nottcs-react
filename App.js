import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableNativeFeedback, TextInput, StatusBar, Dimensions, ScrollView } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { FontAwesome } from 'react-native-vector-icons';

import EventFeedPage from './pages/EventFeedPage';
import ClubListPage from './pages/ClubListPage';
import ProfilePage from './pages/ProfilePage';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import {userInterface} from './redux/reducers/userInterface';
import Page from './components/Page';
import SettingsPage from './pages/SettingsPage';
import NavigationService from './services/NavigationService';
import EventPage from './pages/EventPage';
import EventList from './components/EventList';
import {EVENT_FEED, EVENT_FEED_ICON, CLUB_LIST_ICON, CLUB_LIST, PROFILE, PROFILE_ICON, APP_NAME, EVENT_FEED_TITLE, EVENT_FEED_ACCENT, CLUB_LIST_TITLE, CLUB_LIST_ACCENT, PROFILE_TITLE, PROFILE_ACCENT, DEFAULT_ACCENT, LOGIN_TITLE, SETTINGS_TITLE} from './assets/AppConstants'
import ClubPage from './pages/ClubPage'


const TabBarIcon = (type) => {

	let iconName;

	switch (type) {
		case EVENT_FEED: iconName = EVENT_FEED_ICON; break;
		case CLUB_LIST: iconName = CLUB_LIST_ICON; break;
		case PROFILE: iconName = PROFILE_ICON; break;
	}

	return (
		<FontAwesome name={iconName} color='white' size={20}/>
	);
}

class LoginPage extends React.Component {
	render() {
		return (
			<View style={LoginPageStyle.container}>
				<Text style={LoginPageStyle.appName}>{APP_NAME}</Text>
				<Button title="Login" onPress={() => this.props.navigation.navigate('home')}/>
			</View>
		)
	}
}

const LoginPageStyle = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	appName: {
		fontWeight: 'bold',
		fontSize: 30,
		textAlign: 'center',
		margin: 10
	}
})

const HomeStack = createMaterialBottomTabNavigator({
	eventFeed: {
		screen: ({navigation}) => <Page showActionButtons accentColor={EVENT_FEED_ACCENT} pageName={EVENT_FEED_TITLE} navigation={navigation}><EventFeedPage/></Page> ,
		navigationOptions: {
			title: EVENT_FEED_TITLE,
			tabBarIcon: TabBarIcon(EVENT_FEED),
			tabBarColor: EVENT_FEED_ACCENT
		}
	},
	clubList: {
		screen: ({navigation}) => <Page showActionButtons accentColor={CLUB_LIST_ACCENT} pageName={CLUB_LIST_TITLE} navigation={navigation}><ClubListPage/></Page>,
		navigationOptions: {
			title: CLUB_LIST_TITLE,
			tabBarIcon: TabBarIcon(CLUB_LIST),
			tabBarColor: CLUB_LIST_ACCENT,
		}
	},
	profile: {
		screen: ({navigation}) => <Page showActionButtons accentColor={PROFILE_ACCENT} pageName={PROFILE_TITLE} navigation={navigation}><ProfilePage/></Page>,
		navigationOptions: {
			title: PROFILE_TITLE,
			tabBarIcon: () => TabBarIcon(PROFILE),
			tabBarColor: PROFILE_ACCENT
		}
	},
},
{
	initialRouteName: 'eventFeed',
	shifting: true,
	backBehavior: 'none'
});

const RootStack = createStackNavigator({
	login: {
		screen: ({navigation}) => <Page accentColor={DEFAULT_ACCENT} pageName={LOGIN_TITLE}><LoginPage navigation={navigation}/></Page>,
	},
	home: {
		screen: ({navigation}) => <HomeStack/>
	},
	settings: {
		screen: ({navigation}) => <Page accentColor={DEFAULT_ACCENT} pageName={SETTINGS_TITLE}><SettingsPage navigation={navigation}/></Page>,
	},
	event: {
		screen: ({navigation}) => <Page accentColor={EVENT_FEED_ACCENT} pageName={NavigationService.getParams().event.title}><EventPage/></Page>
	},
	club: {
		screen: ({navigation}) => <ClubPage accentColor={CLUB_LIST_ACCENT}/>
	}
},
{
	initialRouteName: 'login',
	headerMode: 'none'
})

class AppFrame extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<RootStack dispatch={this.props.dispatch}
					ref={navigationRef => {NavigationService.setTopLevelNavigator(navigationRef)}}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	pageTitle: {
		color: 'white',
		fontSize: 20,
	}
});

const AppWithProps = connect(userInterface)(AppFrame);

const UIStore = createStore(userInterface);

export default class App extends React.Component {

	render() {
		return (
			<Provider store={UIStore}>
				<AppWithProps/>
			</Provider>
		);
	}
}
