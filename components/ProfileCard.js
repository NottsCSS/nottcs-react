import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Card } from 'react-native-elements';

const ProfileCard = ({imageSource, title}) => {
    return (
        <View style={ProfileCardStyle.container}>
            <Card image={{uri: imageSource}}
                imageStyle={ProfileCardStyle.image}
                containerStyle={ProfileCardStyle.card}>
                <View>
                    <Text style={ProfileCardStyle.title}>{title}</Text>
                </View>
            </Card>  
        </View>

    )
}

ProfileCard.propTypes = {
    imageSource: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

const ProfileCardStyle = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: 150,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        height: 150,
        width: 150
    }
});

export default ProfileCard;