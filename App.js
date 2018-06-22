import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { FontAwesome } from 'react-native-vector-icons';

import EventFeedPage from './pages/EventFeedPage';

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

const EVENT_FEED_ACCENT = 'red';
const CLUB_LIST_ACCENT = 'green';
const PROFILE_ACCENT = 'blue';

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

const ClubListPage = ({accentColor}) => {
	return (
		<View>
			<View height={StatusBar.currentHeight.valueOf()} backgroundColor={accentColor}/>
			<Text>This is Club List</Text>
		</View>
	);
}

const ProfilePage = ({accentColor}) => {
	return (
		<View>
			<View height={StatusBar.currentHeight.valueOf()} backgroundColor={accentColor}/>
			<Text>This is Profile Page</Text>
		</View>
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
		screen: () => <EventFeedPage accentColor={EVENT_FEED_ACCENT}/>,
		navigationOptions: {
			title: EVENT_FEED_TITLE,
			tabBarIcon: TabBarIcon(EVENT_FEED),
			tabBarColor: EVENT_FEED_ACCENT,
		}
	},
	clubList: {
		screen: () => <ClubListPage accentColor={CLUB_LIST_ACCENT}/>,
		navigationOptions: {
			title: CLUB_LIST_TITLE,
			tabBarIcon: TabBarIcon(CLUB_LIST),
			tabBarColor: CLUB_LIST_ACCENT,
		}
	},
	profile: {
		screen: () => <ProfilePage accentColor={PROFILE_ACCENT}/>,
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
		screen: () => <HomeStack/>
	},
},
{
	initialRouteName: 'login',
	headerMode: 'none'
})

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<RootStack/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
