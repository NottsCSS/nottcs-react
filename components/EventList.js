import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import NavigationService from '../services/NavigationService';
import ListViewItemWithImage from './ListViewItemWithImage';

const EventList = ({eventList}) => {
    return (
        <ScrollView style={{flex: 1}}>
            {
                eventList.map(data => (
                    <TouchableOpacity key={data.id} onPress={() => NavigationService.navigate('event', {event: data})}>
                        <View>
                            <ListViewItemWithImage title={data.title}
                                description={data.description}
                                imageSource={data.imageSource}/>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    );
}

export default EventList;