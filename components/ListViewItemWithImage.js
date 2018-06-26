import React, {Component} from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ListViewItemWithImage = ({imageSource, title, description}) => {
    return (
        <View style={ListViewItemWithImageStyle.container}>
            <Image style={ListViewItemWithImageStyle.image} source={{uri: imageSource}}/>
            <View style={ListViewItemWithImageStyle.descriptionContainer}>
                <Text style={ListViewItemWithImageStyle.title}>{title}</Text>
                <Text style={ListViewItemWithImageStyle.description}>{description}</Text>
            </View>
        </View>
    );
}

ListViewItemWithImage.propTypes = {
    imageSource: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

const ListViewItemWithImageStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 1,
        flex: 1,
    },
    descriptionContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 5
    },
    image: {
        height: 120,
        width: 120
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30
    },
    description: {
        color: 'grey'
    }
})

export default ListViewItemWithImage;