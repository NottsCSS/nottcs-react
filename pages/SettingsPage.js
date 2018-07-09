import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import LogoutPage from './LogoutPage';
import NavigationService from '../services/NavigationService';
const AboutPage = () => {
    return (
        <View>
            <Text>This is About Page</Text>
        </View>
    );
}

const NotificationSettingsPage = () => {
    return (
        <View>
            <Text>This is settings Notification Page</Text>
        </View>
    );
}

const RatingPage = () => {
    return (
        <View>
            <Text>Rate Us!</Text>
        </View>
    );
}

const FeedbackPage = () => {
    return (
        <View>
            <Text>Give us feedback!</Text>
        </View>
    );
}

const Settings = ({navigation}) => {
    return (
        <View>
            <ListItem title="Notifications" onPress={() => navigation.navigate('notification')}/>
            <ListItem title="About" onPress={() => navigation.navigate('about')}/>
            <ListItem title="Rate Us" onPress={() => navigation.navigate('rate')}/>
            <ListItem title="Feedback" onPress={() => navigation.navigate('feedback')}/>
            <ListItem title="Sign Out" onPress={() => NavigationService.navigate('login', {logout: true})}/>
        </View>
    )
}

const SettingsStack = createStackNavigator({
    settings: {
        screen: Settings
    },
    notification: {
        screen: NotificationSettingsPage
    },
    about: {
        screen: AboutPage
    },
    rate: {
        screen: RatingPage
    },
    feedback: {
        screen: FeedbackPage
    },
    logout: {
        screen: LogoutPage
    }
},
{
    initialRouteName: 'settings',
    headerMode: 'none',
});

class SettingsPage extends Component {
    render() {
        return (
            <SettingsStack/>
        );
    }
}

export default SettingsPage;