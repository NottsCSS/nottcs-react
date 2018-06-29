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

class ClubDescriptionPage extends React.Component {

	state = {
		club: null
	}

	componentDidMount() {
		let club = NavigationService.getParams().club;

		let newState = Object.assign({}, this.state, {club});

		this.setState(newState);
	}

	render() {
		return (
			this.state.club
			?
				<View style={ClubDescriptionPageStyle.container}>
					<Image source={{uri: this.state.club.imageSource}}
						style={ClubDescriptionPageStyle.image}/>
					<ScrollView style={ClubDescriptionPageStyle.container} 
						contentContainerStyle={ClubDescriptionPageStyle.textView}>
						<Text style={ClubDescriptionPageStyle.title}>{this.state.club.title}</Text>
						<Text style={ClubDescriptionPageStyle.description}>{this.state.club.description}</Text>
					</ScrollView>
					<Button title="Register" onPress={() => alert('Registring you to the club!')}/>
				</View>
			:
				<View style={ClubDescriptionPageStyle.textView}>
					<Text>Please wait while we pull some data...</Text>
				</View>
		)
	}
}

const ClubDescriptionPageStyle = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		height: 200,
		width: Dimensions.get('window').width,
		resizeMode: 'contain',
		backgroundColor: 'white',
		padding: 10
	},
	textView: {
		padding: 10,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	description: {
		textAlign: 'justify',
	}
});

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
			<View style={{height: StatusBar.currentHeight.valueOf(), backgroundColor: accentColor}}/>
			<View style={{flex: 1}}>
				<ClubStack/>
			</View>
		</View>
	)
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
