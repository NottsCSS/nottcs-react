import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AppStore from '../redux/reducers';

class ClubSignUpPage extends React.Component {

    render() {
        const {onCancel, onSubmit, user, club} = this.props;
        return (
            <View style={ClubSignUpPageStyle.container}>
                <View style={ClubSignUpPageStyle.formContainer}>
                    <Text style={ClubSignUpPageStyle.title}>Register</Text>
                    <Text style={ClubSignUpPageStyle.target}>{club.name}</Text>
                    <TextInput style={ClubSignUpPageStyle.textInput} placeholder="Name" defaultValue={user.name}/>
                    <TextInput style={ClubSignUpPageStyle.textInput} placeholder="Email" defaultValue={user.email}/>
                </View>
                <View style={ClubSignUpPageStyle.button}>
                    <Button title="Register Membership" onPress={onSubmit}/>
                </View>
                <View style={ClubSignUpPageStyle.button}>
                    <Button title="Cancel" onPress={onCancel}/>
                </View>
            </View>
        )
    }
}

ClubSignUpPage.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

const ClubSignUpPageStyle = StyleSheet.create({
    container: {
        backgroundColor: 'white', 
        padding: 20
    },
    formContainer: {
        padding: 10
    },
    title: {
        fontSize: 30
    },
    target: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    textInput: {
        padding: 5
    },
    button: {
        margin: 5
    }
})

export default connect(AppStore => AppStore.user)(ClubSignUpPage);