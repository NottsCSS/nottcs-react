import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

const LoadingPage = () => {
    return (
        <View style={LoadingPageStyle.container}>
            <ActivityIndicator size="large"/>
            <Text style={LoadingPageStyle.text}>Please wait while we pull some data...</Text>
        </View>
    );
}

const LoadingPageStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center'
    }
});

export default LoadingPage;