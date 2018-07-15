import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { APP_STORE } from "../services/redux/reducers/index";
import { USER, EVENT_FEED_SECONDARY_ACCENT } from "../assets/AppConstants";

class EventSignUpPage extends React.Component {
    render() {
        const { onCancel, onSubmit, event } = this.props;
        const user = this.props.request.data[USER].result;
        return (
            <View style={EventSignUpPageStyle.container}>
                <View style={EventSignUpPageStyle.formContainer}>
                    <Text style={EventSignUpPageStyle.title}>Sign Up</Text>
                    <Text style={EventSignUpPageStyle.target}>
                        {event.title}
                    </Text>
                    <TextInput
                        style={EventSignUpPageStyle.textInput}
                        placeholder="Name"
                        defaultValue={user.name}
                    />
                    <TextInput
                        style={EventSignUpPageStyle.textInput}
                        placeholder="Email"
                        defaultValue={user.email}
                    />
                </View>
                <View style={EventSignUpPageStyle.button}>
                    <Button
                        title="Sign Up"
                        onPress={onSubmit}
                        color={EVENT_FEED_SECONDARY_ACCENT}
                    />
                </View>
                <View style={EventSignUpPageStyle.button}>
                    <Button
                        title="Cancel"
                        onPress={onCancel}
                        color={EVENT_FEED_SECONDARY_ACCENT}
                    />
                </View>
            </View>
        );
    }
}

EventSignUpPage.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

const EventSignUpPageStyle = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 20
    },
    formContainer: {
        padding: 10
    },
    title: {
        fontSize: 30
    },
    target: {
        fontWeight: "bold",
        fontSize: 18
    },
    textInput: {
        padding: 5
    },
    button: {
        margin: 5
    }
});

export default connect(APP_STORE => APP_STORE)(EventSignUpPage);
