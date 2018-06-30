import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';

const ClubSignUpPage = ({onCancel, onSubmit}) => {
	return (
		<View style={ClubSignUpPageStyle.container}>
			<View style={ClubSignUpPageStyle.formContainer}>
				<Text style={ClubSignUpPageStyle.title}>Register</Text>
				<TextInput style={ClubSignUpPageStyle.textInput} placeholder="Name"/>
				<TextInput style={ClubSignUpPageStyle.textInput} placeholder="Phone"/>
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
    textInput: {
        padding: 5
    },
    button: {
        margin: 5
    }
})

export default ClubSignUpPage;