import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Card } from 'react-native-elements';

const GridViewItemWithImage = ({imageSource, title}) => {
    return (
        <Card image={{uri: imageSource}}
            containerStyle={GridViewItemWithImageStyle.container}>
            <View>
                <Text style={GridViewItemWithImageStyle.title}>{title}</Text>
            </View>
        </Card>
    );
}

GridViewItemWithImage.propTypes = {
    imageSource: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

const GridViewItemWithImageStyle = StyleSheet.create({
    container: {
        margin: 1,
        flex: 1,
    },
    image: {
        height: 90,
        width: 90
    },
    title: {
        fontSize: 20,
        textAlign: 'center'
    }
});

export default GridViewItemWithImage;