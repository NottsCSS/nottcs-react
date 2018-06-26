import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { FontAwesome } from 'react-native-vector-icons';

import EventFeedPage from './pages/EventFeedPage';
import ClubListPage from './pages/ClubListPage';
import ProfilePage from './pages/ProfilePage';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import {userInterface} from './redux/reducers/userInterface'
import Page from './components/Page';
import SettingsPage from './pages/SettingsPage';
import NavigationService from './services/NavigationService'


const APP_NAME = 'NottCS';

const EVENT_FEED = 'eventFeed';
const CLUB_LIST = 'clubList';
const PROFILE = 'profile';

const EVENT_FEED_TITLE = 'Event Feed';
const CLUB_LIST_TITLE = 'Club List';
const PROFILE_TITLE = 'Profile';
const LOGIN_TITLE = 'Login NottCS';
const SETTINGS_TITLE = 'App Settings';

const EVENT_FEED_ICON = 'feed';
const CLUB_LIST_ICON = 'star';
const PROFILE_ICON = 'user-circle';

const EVENT_FEED_ACCENT = '#4c4cff';
const CLUB_LIST_ACCENT = '#6666ff';
const PROFILE_ACCENT = '#7f7fff';
const DEFAULT_ACCENT = 'purple';

class EventPage extends React.Component {

	state={
		params: null
	}

	componentDidMount() {
		console.log('component mounted');
		let params = NavigationService.getParams();
		this.setState(Object.assign({}, this.state, {params: params}));
	}

	render() {
		return (
			<View>
				<Text>This is event page for: { this.state.params && this.state.params.event.title }</Text>
			</View>
		);
	}
}

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
	shifting: true
});

const RootStack = createStackNavigator({
	login: {
		screen: ({navigation}) => <Page accentColor={DEFAULT_ACCENT} pageName={LOGIN_TITLE}><LoginPage navigation={navigation}/></Page>,
	},
	home: {
		screen: () => <HomeStack/>
	},
	settings: {
		screen: ({navigation}) => <Page accentColor={DEFAULT_ACCENT} pageName={SETTINGS_TITLE}><SettingsPage navigation={navigation}/></Page>,
	},
	event: {
		screen: ({navigation}) => <Page accentColor={EVENT_FEED_ACCENT} pageName={NavigationService.getParams().event.title}><EventPage/></Page>
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
