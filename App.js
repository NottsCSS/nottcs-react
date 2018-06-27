import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableNativeFeedback } from 'react-native';
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
import { Tile } from 'react-native-elements';
import Modal from 'react-native-modal';


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

class ClubPage extends React.Component {

	state = {
		params: null
	}

	render() {
		return (
			<View>
				<Text>This is club page for: {NavigationService.getParams().club.title}</Text>
			</View>
		)
	}
}

class EventPage extends React.Component {

	state={
		params: null,
		posterModalVisible: false,
		signUpModalVisible: false,
	}

	componentDidMount() {
		let params = NavigationService.getParams();
		this.setState(Object.assign({}, this.state, {params: params}));
	}

	render() {
		return (
			this.state.params
			?
				<View style={EventPageStyle.container}>
					<Tile imageSrc={{uri: this.state.params.event.imageSource}}
						title={this.state.params.event.title}
						activeOpacity={1}
						onPress={() => this.setState({posterModalVisible: true})}/>
					<View style={EventPageStyle.textView}>
						<Text>{this.state.params.event.description}</Text>
					</View>
					<Button title="Sign Up!" onPress={() => this.setState({signUpModalVisible: true})}/>
					
					{/* Poster Modal*/}
					<Modal isVisible={this.state.posterModalVisible}
						onBackButtonPress={() => this.setState({posterModalVisible: false})}
						onBackdropPress={() => this.setState({posterModalVisible: false})}
						onSwipe={() => this.setState({posterModalVisible: false})}
						swipeDirection="down">
						<Image source={{uri: this.state.params.event.imageSource}}
							style={EventPageStyle.image}/>
					</Modal>

					{/* Sign up Modal*/}
					<Modal isVisible={this.state.signUpModalVisible}>
						<View style={{backgroundColor: 'white', padding: 20}}>
							<Text>This is sign up page</Text>
							<Button title="Sign Up" onPress={() => alert("Signing Up!")}/>
							<Button title="Cancel" onPress={() => this.setState({signUpModalVisible: false})}/>
						</View>
					</Modal>
				</View>
			:
				<View style={EventPageStyle.textView}>
					<Text>Please wait while we pull some data...</Text>
				</View>
		);
	}
}

const EventPageStyle = StyleSheet.create({
	container: {
		flex: 1
	},
	image: {

		height: 300,
		resizeMode: 'contain',
	},
	textView: {
		flex: 1,
		padding: 15,
	}
})

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
		screen: ({navigation}) => <Page accentColor={CLUB_LIST_ACCENT} pageName={NavigationService.getParams().club.title}><ClubPage/></Page>
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
