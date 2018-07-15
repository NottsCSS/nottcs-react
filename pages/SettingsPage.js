import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { ListItem } from "react-native-elements";
import { createStackNavigator } from "react-navigation";
import NavigationService from "../services/NavigationService";
import { FontAwesome } from "react-native-vector-icons";
const AboutPage = () => {
    return (
        <View>
            <Text>This is About Page</Text>
        </View>
    );
};

const NotificationSettingsPage = () => {
    return (
        <View>
            <Text>This is settings Notification Page</Text>
        </View>
    );
};

const RatingPage = () => {
    return (
        <View>
            <Text>Rate Us!</Text>
        </View>
    );
};

const FeedbackPage = () => {
    return (
        <View>
            <Text>Give us feedback!</Text>
        </View>
    );
};

const Settings = ({ navigation }) => {
    return (
        <View>
            <ListItem
                leftIcon={
                    <FontAwesome style={SettingsStyle.icon} name="bell-o" />
                }
                title="Notifications"
                onPress={() => navigation.navigate("notification")}
            />
            <ListItem
                leftIcon={
                    <FontAwesome style={SettingsStyle.icon} name="info" />
                }
                title="About"
                onPress={() => navigation.navigate("about")}
            />
            <ListItem
                leftIcon={
                    <FontAwesome style={SettingsStyle.icon} name="star-o" />
                }
                title="Rate Us"
                onPress={() => navigation.navigate("rate")}
            />
            <ListItem
                leftIcon={
                    <FontAwesome style={SettingsStyle.icon} name="inbox" />
                }
                title="Feedback"
                onPress={() => navigation.navigate("feedback")}
            />
            <ListItem
                leftIcon={
                    <FontAwesome style={SettingsStyle.icon} name="user-times" />
                }
                title="Sign Out"
                onPress={() =>
                    NavigationService.navigate("login", { logout: true })
                }
            />
        </View>
    );
};

const SettingsStyle = StyleSheet.create({
    icon: {
        margin: 10,
        width: 30
    }
});

const SettingsStack = createStackNavigator(
    {
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
        }
    },
    {
        initialRouteName: "settings",
        headerMode: "none"
    }
);

class SettingsPage extends Component {
    render() {
        return <SettingsStack />;
    }
}

export default SettingsPage;
