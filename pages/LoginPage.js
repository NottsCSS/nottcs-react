import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import PropTypes from "prop-types";
import {
    APP_NAME,
    CLIENT_ID,
    CLIENT_SECRET,
    RESOURCE_ID,
    USER
} from "../assets/AppConstants";
import { ReactNativeAD, ADLoginView } from "react-native-azure-ad";
import { connect } from "react-redux";
import NavigationService from "../services/NavigationService";
import { requestData } from "../services/redux/actions/request";
import { APP_STORE } from "../services/redux/reducers";

class LoginPage extends Component {
    state = {
        isLoggingIn: false
    };

    AzureADContext = {
        client_id: CLIENT_ID,
        resources: [RESOURCE_ID]
    };

    loginSuccess = credentials => {
        this.props.dispatch(requestData(USER, null, USER));
        NavigationService.navigateAndClearStack("home");
    };

    componentDidMount() {
        this.setState({ isLoggingIn: true });
    }

    render() {
        new ReactNativeAD({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            resources: [RESOURCE_ID]
        });

        return this.state.isLoggingIn ? (
            <View style={LoginPageStyle.container}>
                <ADLoginView
                    context={ReactNativeAD.getContext(CLIENT_ID)}
                    onSuccess={this.loginSuccess}
                    hideAfterLogin
                    needLogout={
                        NavigationService.getParams() &&
                        NavigationService.getParams().logout
                    }
                />
            </View>
        ) : (
            <View style={LoginPageStyle.container}>
                <Text style={LoginPageStyle.appName}>{APP_NAME}</Text>
                <Button
                    title="Login"
                    onPress={() => this.setState({ isLoggingIn: true })}
                />
                {/*<Text>{JSON.stringify(this.props)}</Text>*/}
            </View>
        );
    }
}

const LoginPageStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    appName: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
        margin: 10
    }
});

export default connect(APP_STORE => APP_STORE)(LoginPage);
