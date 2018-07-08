import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';
import ChangeCase from 'change-case';

const DetailList = ({details}) => {

    return (
        <ScrollView style={DetailListStyle.scroll}>
            <ListItem title="Name" subtitle={details.name} hideChevron/>
            <ListItem title="Email" subtitle={details.email} hideChevron/>
            <ListItem title="Student ID" subtitle={details.student_id} hideChevron/>
            <ListItem title="Library Number" subtitle={details.library_no} hideChevron/>
            <ListItem title="Studying Course" subtitle={details.course} hideChevron/>
            <ListItem title="Year of Study" subtitle={details.year_of_study} hideChevron/>
        </ScrollView>
    );
}

DetailList.propTypes = {
    details: PropTypes.object.isRequired
}

const DetailListStyle = StyleSheet.create({
    scroll: {
        flex: 1,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
 export default DetailList;