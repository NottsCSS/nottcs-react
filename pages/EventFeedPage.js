import React, {Component} from 'react';
import { View, Text, Button, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

const ListViewItemWithImage = ({imageSource, title, description}) => {
    return (
        <View style={ListViewItemWithImageStyle.container}>
            <Image style={ListViewItemWithImageStyle.image} source={{uri: 'http://i1.kym-cdn.com/photos/images/original/000/663/060/024.png'}}/>
            <View style={ListViewItemWithImageStyle.descriptionContainer}>
                <Text style={ListViewItemWithImageStyle.title}>Title</Text>
                <Text style={ListViewItemWithImageStyle.description}>Description and more description</Text>
            </View>
        </View>
    );
}

const ListViewItemWithImageStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 1,
        flex: 1,
    },
    descriptionContainer: {
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

class EventFeedPage extends Component {

    _accentColor = this.props.accentColor;

    static propTypes = {
        accentColor: PropTypes.string.isRequired
    }

    render() {
        return (
            <View style={EventFeedPageStyle.container}>
                <View height={StatusBar.currentHeight.valueOf()} backgroundColor={this._accentColor}/>
                <ScrollView style={EventFeedPageStyle.container}>
                    <ListViewItemWithImage/>
                    <ListViewItemWithImage/>
                    <ListViewItemWithImage/>
                    <ListViewItemWithImage/>
                    <ListViewItemWithImage/>
                    <ListViewItemWithImage/>
                    <ListViewItemWithImage/>
                    <ListViewItemWithImage/>
                    <ListViewItemWithImage/>
                    <ListViewItemWithImage/>
                </ScrollView>
            </View>
        )
    }
}

const EventFeedPageStyle = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default EventFeedPage;