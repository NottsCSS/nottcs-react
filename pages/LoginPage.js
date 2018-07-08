import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';
import { APP_NAME , CLIENT_ID, CLIENT_SECRET} from '../assets/AppConstants';
import { ReactNativeAD, ADLoginView } from 'react-native-azure-ad';
import {connect} from 'react-redux';
import {credentials} from '../redux/reducers/credentials';
import {saveCredentials} from '../redux/actions/credentials';
import AppStore from '../redux/reducers';

class LoginPage extends Component {

    state = {
        isLoggingIn: false
    }

    AzureADContext = {
        client_id: CLIENT_ID,
        resources: [
            'https://graph.microsoft.com'
        ]
    }

    loginSuccess = (credentials) => {
        let accessTokenDetails = credentials[`https://graph.microsoft.com`];
        console.log('accessTokenDetails.access_token :', accessTokenDetails.access_token);
        console.log('accessTokenDetails :', accessTokenDetails);
        this.props.dispatch(saveCredentials(accessTokenDetails));
        this.props.navigation.navigate('home');
    }


	render() {

        new ReactNativeAD({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            resources: [
                'https://graph.microsoft.com'
            ]
        });

		return (
            this.state.isLoggingIn
            ?
                <View style={LoginPageStyle.container}>
                    <ADLoginView context={ReactNativeAD.getContext(CLIENT_ID)}
                        onSuccess={this.loginSuccess}
                        hideAfterLogin/>
                </View>
            :
                <View style={LoginPageStyle.container}>
                    <Text style={LoginPageStyle.appName}>{APP_NAME}</Text>
                    <Button title="Login" onPress={() => this.setState({isLoggingIn: true})}/>
                    {/*<Text>{JSON.stringify(this.props)}</Text>*/}
                </View>
		)
	}
}

const LoginPageStyle = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	appName: {
		fontWeight: 'bold',
		fontSize: 30,
		textAlign: 'center',
		margin: 10
	}
})



export default connect(AppStore => AppStore.credentials)(LoginPage);