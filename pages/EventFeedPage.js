import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import EventList from '../components/EventList';
import {connect} from 'react-redux';

const exampleData = [
    {
        id: 1,
        title: 'Make() 2018',
        description: 'Make() 2018 is back again! Create your software project and pitch to investors!',
        imageSource: 'http://d.wildapricot.net/images/newsblog/build-vs-buy-membership-management-software.jpg',
    },
    {
        id: 2,
        title: 'Hackathon',
        description: `Hack your way to NSA's server!`,
        imageSource: 'https://www.serenova.com/sites/default/files/serenova_hackathon_2017_logo-web.png',
    },
    {
        id: 3,
        title: 'DevOps Workshop',
        description: 'Wonder how does industrial level software development work? Start with DevOps to learn to manage projects.',
        imageSource: 'http://www.globaldots.com/wordpress/wp-content/uploads/2014/12/DevOpsDays.png',
    },
    {
        id: 4,
        title: 'Image Cup @UNMC',
        description: 'Microsoft Imagine Cup is back!',
        imageSource: 'https://sec.ch9.ms/ch9/2bc1/ae7faf35-8cfb-4d61-8ac2-4e6ce2d72bc1/USImagineCupSemiFinals_960.jpg',
    },
    {
        id: 5,
        title: 'React Native Workshop',
        description: 'This awesome app is created by React Native! Learn more on how to build it in this workshop!',
        imageSource: 'https://www.appcoda.com/wp-content/uploads/2015/04/react-native-1024x631.png',
    },
]

class EventFeedPage extends Component {

    state = {
        eventList: []
    }

    componentDidMount() {
        let newState = Object.assign({}, this.state, {
            eventList: exampleData,
        });

        this.setState(newState);
    }

    render() {
        return (
            <View style={EventFeedPageStyle.container}>
                <EventList eventList={this.state.eventList}/>
            </View>
        )
    }
}

const EventFeedPageStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    }
})

export default EventFeedPage;