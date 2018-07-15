import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { APP_STORE } from "../services/redux/reducers";
import { USER } from "../assets/AppConstants";

class ClubSignUpPage extends React.Component {
    render() {
        const { onCancel, onSubmit, club } = this.props;
        const user = this.props.request.data[USER].result;
        return (
            <View style={ClubSignUpPageStyle.container}>
                <View style={ClubSignUpPageStyle.formContainer}>
                    <Text style={ClubSignUpPageStyle.title}>Register</Text>
                    <Text style={ClubSignUpPageStyle.target}>{club.name}</Text>
                    <TextInput
                        style={ClubSignUpPageStyle.textInput}
                        placeholder="Name"
                        defaultValue={user.name}
                    />
                    <TextInput
                        style={ClubSignUpPageStyle.textInput}
                        placeholder="Email"
                        defaultValue={user.email}
                    />
                </View>
                <View style={ClubSignUpPageStyle.button}>
                    <Button title="Register Membership" onPress={onSubmit} />
                </View>
                <View style={ClubSignUpPageStyle.button}>
                    <Button title="Cancel" onPress={onCancel} />
                </View>
            </View>
        );
    }
}

ClubSignUpPage.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

const ClubSignUpPageStyle = StyleSheet.create({
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

export default connect(APP_STORE => APP_STORE)(ClubSignUpPage);
