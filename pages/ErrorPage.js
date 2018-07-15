import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import PropTypes from "prop-types";
import logo from "../assets/icon2.png";

const ErrorPage = ({ errorMessage }) => {
    return (
        <View style={ErrorPageStyle.container}>
            <Image style={ErrorPageStyle.logo} source={logo} />
            <Text style={ErrorPageStyle.title}>Whoops!</Text>
            <Text style={ErrorPageStyle.message}>
                Contact our engineers with the message below,
            </Text>
            <ScrollView style={ErrorPageStyle.errorMessageBox} height={50}>
                <Text>{errorMessage}</Text>
            </ScrollView>
        </View>
    );
};

ErrorPage.propTypes = {
    errorMessage: PropTypes.string.isRequired
};

const ErrorPageStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        height: 100,
        width: 100
    },
    title: {
        fontSize: 30
    },
    message: {
        fontSize: 20
    },
    errorMessageBox: {
        marginTop: 10
    }
});

export default ErrorPage;
