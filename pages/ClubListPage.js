import React, { Component } from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import GridView from 'react-native-super-grid';

import GridViewItemWithImage from '../components/GridViewItemWithImage'
import NavigationService from '../services/NavigationService'

const ExampleData = [
    {id: 1, title: 'Computer Science Society', imageSource: 'http://sanottingham.org//wp-content/uploads/Computer-science-society-logo.png'},
    {id: 2, title: `Nott's Makers`, imageSource: 'http://sanottingham.org//wp-content/uploads/2015/07/13925537_1111562382270994_8102554198483220907_o.jpg'},
    {id: 3, title: 'Accounting and Finance Society UNMC', imageSource: 'http://sanottingham.org//wp-content/uploads/accounting-finance-society-logo-2-unmc.jpg'},
    {id: 4, title: 'Robotics Society', imageSource: 'http://sanottingham.org//wp-content/uploads/UNMC-CRS.png'},
    {id: 5, title: 'Digital Arts Guild', imageSource: 'http://sanottingham.org//wp-content/uploads/DAG-Logo1.png'},
    {id: 6, title: 'Gaming Society', imageSource: 'http://sanottingham.org//wp-content/uploads/Gaming-Society-Logo.png'},
    {id: 7, title: 'NDC', imageSource: 'http://sanottingham.org//wp-content/uploads/NDC-NEW-LOGO.png'},
    {id: 8, title: 'IEM', imageSource: 'http://sanottingham.org//wp-content/uploads/2015/07/IEM-UNMC-Student-Section.png'},
    {id: 9, title: 'Enactus UNMC', imageSource: 'http://sanottingham.org//wp-content/uploads/Enactus-Logo.png'},
    {id: 10, title: 'Japanese Cultural Society', imageSource: 'http://sanottingham.org//wp-content/uploads/Japanese-Cultural-Society-Logo.png'},
    {id: 11, title: 'Chinese Cultural Society', imageSource: 'http://sanottingham.org//wp-content/uploads/Chinese-Cultural-Society-Logo.png'},
    {id: 12, title: 'ACE Society', imageSource: 'http://sanottingham.org//wp-content/uploads/ACE-Logo.png'},
    {id: 13, title: 'Music Society', imageSource: 'http://sanottingham.org//wp-content/uploads/Mussoc.png'},
]

class ClubListPage extends Component {
    render() {
        return (
            <View style={ClubListPageStyle.container}>
                <GridView itemDimension={120}
                    items={ExampleData}
                    renderItem={item => 
                        <TouchableNativeFeedback onPress={() => NavigationService.navigate('club', {club: item})}>
                            <View>
                                <GridViewItemWithImage imageSource={item.imageSource} title={item.title}/>
                            </View>
                        </TouchableNativeFeedback>
                    }/>
            </View>
        );
    }
}

const ClubListPageStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    }
})

export default ClubListPage;