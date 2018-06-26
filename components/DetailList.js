import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';
import ChangeCase from 'change-case';

const DetailList = ({details}) => {

    let detailList = Object.keys(details).map(key => {
        let newObject = {};
        newObject[key] = details[key];

        return newObject;
    });

    return (
        <ScrollView style={DetailListStyle.scroll}>
            {
                detailList.map((detail, index) => {
                    let key = Object.keys(detail)[0];
                    let title = ChangeCase.titleCase(key);
                    let subtitle = detail[key];
                    return (
                        <ListItem key={index} title={title} subtitle={subtitle} hideChevron/>
                    );
                })
            }
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