import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';

const EventSignUpPage = ({onCancel, onSubmit}) => {
	return (
		<View style={EventSignUpPageStyle.container}>
			<View style={EventSignUpPageStyle.formContainer}>
				<Text style={EventSignUpPageStyle.title}>Sign Up</Text>
				<TextInput style={EventSignUpPageStyle.textInput} placeholder="Name"/>
				<TextInput style={EventSignUpPageStyle.textInput} placeholder="Phone"/>
			</View>
			<View style={EventSignUpPageStyle.button}>
				<Button title="Sign Up" onPress={onSubmit}/>
			</View>
			<View style={EventSignUpPageStyle.button}>
				<Button title="Cancel" onPress={onCancel}/>
			</View>
		</View>
	)
}

EventSignUpPage.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

const EventSignUpPageStyle = StyleSheet.create({
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
    textInput: {
        padding: 5
    },
    button: {
        margin: 5
    }
})

export default EventSignUpPage;