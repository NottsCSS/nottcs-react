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


const APP_NAME = 'NottCS';

const EVENT_FEED = 'eventFeed';
const CLUB_LIST = 'clubList';
const PROFILE = 'profile';

const EVENT_FEED_TITLE = 'Event Feed';
const CLUB_LIST_TITLE = 'Club List';
const PROFILE_TITLE = 'Profile';

const EVENT_FEED_ICON = 'feed';
const CLUB_LIST_ICON = 'star';
const PROFILE_ICON = 'user-circle';

const EVENT_FEED_ACCENT = '#4c4cff';
const CLUB_LIST_ACCENT = '#6666ff';
const PROFILE_ACCENT = '#7f7fff';

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

const LoginPage = ({navigation}) => {
	return (
		<View style={LoginPageStyle.container}>
			<Text style={LoginPageStyle.appName}>{APP_NAME}</Text>
			<Button title="Login" onPress={() => navigation.navigate('home')}/>
		</View>
	)
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
		screen: () => <Page _accentColor={EVENT_FEED_ACCENT} pageName={EVENT_FEED_TITLE}><EventFeedPage/></Page> ,
		navigationOptions: {
			title: EVENT_FEED_TITLE,
			tabBarIcon: TabBarIcon(EVENT_FEED),
			tabBarColor: EVENT_FEED_ACCENT
		}
	},
	clubList: {
		screen: () => <Page _accentColor={CLUB_LIST_ACCENT} pageName={CLUB_LIST_TITLE}><ClubListPage/></Page>,
		navigationOptions: {
			title: CLUB_LIST_TITLE,
			tabBarIcon: TabBarIcon(CLUB_LIST),
			tabBarColor: CLUB_LIST_ACCENT,
		}
	},
	profile: {
		screen: () => <Page _accentColor={PROFILE_ACCENT} pageName={PROFILE_TITLE}><ProfilePage/></Page>,
		navigationOptions: {
			title: PROFILE_TITLE,
			tabBarIcon: () => TabBarIcon(PROFILE),
			tabBarColor: PROFILE_ACCENT
		}
	}
},
{
	initialRouteName: 'eventFeed',
	shifting: true
});

const RootStack = createStackNavigator({
	login: {
		screen: LoginPage,
	},
	home: {
		screen: ({navigation}) => <HomeStack/>
	},
},
{
	initialRouteName: 'login',
	headerMode: 'none'
})

class AppFrame extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<RootStack dispatch={this.props.dispatch}/>
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
