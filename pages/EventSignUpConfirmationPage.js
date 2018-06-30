import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';
import QRCode from 'react-native-qrcode-svg';

const EventSignUpConfirmationPage = ({onClose}) => {
	return (
		<View style={EventSignUpConfirmationPageStyle.container}>
			<Text style={EventSignUpConfirmationPageStyle.text}>Get your QR Code scanned by the club admin to confirm the sign up!</Text>
			<View style={EventSignUpConfirmationPageStyle.qrCode}>
				<QRCode value="Special sauce for confirmation to work!"
					size={200}/>
			</View>
			<View style={EventSignUpConfirmationPageStyle.button}>
				<Button title="Save QR Code" onPress={() => alert('Saving QR Code!')}/>
			</View>
			<View style={EventSignUpConfirmationPageStyle.button}>
				<Button title="Close" onPress={onClose}/>
			</View>
		</View>
	)
}

EventSignUpConfirmationPage.propTypes = {
    onClose: PropTypes.func.isRequired
}

const EventSignUpConfirmationPageStyle = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20
    },
    qrCode: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    button: {
        margin: 5
    },
    text: {
        fontSize: 16
    }
})

export default EventSignUpConfirmationPage;