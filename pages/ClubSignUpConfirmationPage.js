import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';
import QRCode from 'react-native-qrcode-svg';
import AppStore from '../redux/reducers';
import QRStringGenerator from '../components/scripts/QRStringGenerator';
import {connect} from 'react-redux';

class ClubSignUpConfirmationPage extends React.Component {

    render() {
        const {onClose, club, user} = this.props;
        let qrCode = QRStringGenerator('club', club.name, user.id);
        return (
            <View style={ClubSignUpConfirmationPageStyle.container}>
                <Text style={ClubSignUpConfirmationPageStyle.text}>Get your QR Code scanned by the club admin to confirm registration!</Text>
                <View style={ClubSignUpConfirmationPageStyle.qrCode}>
                    <QRCode value={qrCode}
                        size={200}/>
                </View>
                <View style={ClubSignUpConfirmationPageStyle.button}>
                    <Button title="Save QR Code" onPress={() => alert('Saving QR Code!')}/>
                </View>
                <View style={ClubSignUpConfirmationPageStyle.button}>
                    <Button title="Close" onPress={onClose}/>
                </View>
            </View>
        )
    }
}

ClubSignUpConfirmationPage.propTypes = {
    onClose: PropTypes.func.isRequired
}

const ClubSignUpConfirmationPageStyle = StyleSheet.create({
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

export default connect(AppStore => AppStore.user)(ClubSignUpConfirmationPage);