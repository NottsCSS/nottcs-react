import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ADLoginView, ReactNativeAD } from 'react-native-azure-ad';
import { CLIENT_ID } from '../assets/AppConstants';
import NavigationService from '../services/NavigationService';

class LogoutPage extends Component {

    render() {
        return (
            <View style={LogoutPageStyle.container}>
                <ADLoginView context={ReactNativeAD.getContext(CLIENT_ID)}
                    needLogout={true}
                    onSuccess={() => NavigationService.navigate('login')}
                    hideAfterLogin={true}/>

                <View style={LogoutPageStyle.messageContainer}>
                    <Text style={LogoutPageStyle.messageText}>Please Restart App After Logging Out</Text>
                </View>
            </View>
        )
    }

}

const LogoutPageStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    messageContainer: {
        backgroundColor: 'red',
        height: 30
    },
    messageText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        textAlignVertical: 'center'
    }
});

export default LogoutPage;