import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, StatusBar, FlatList } from 'react-native';
import GridView from 'react-native-super-grid';

import { Card } from 'react-native-elements';

const ExampleData = [
    {id: 1, title: 'Item 1', imageSource: 'http://i1.kym-cdn.com/photos/images/original/000/663/060/024.png'},
    {id: 2, title: 'Item 2', imageSource: 'http://i1.kym-cdn.com/photos/images/original/000/663/060/024.png'},
    {id: 3, title: 'Item 3', imageSource: 'http://i1.kym-cdn.com/photos/images/original/000/663/060/024.png'},
    {id: 4, title: 'Item 4', imageSource: 'http://i1.kym-cdn.com/photos/images/original/000/663/060/024.png'},
    {id: 5, title: 'Item 5', imageSource: 'http://i1.kym-cdn.com/photos/images/original/000/663/060/024.png'},
    {id: 6, title: 'Item 6', imageSource: 'http://i1.kym-cdn.com/photos/images/original/000/663/060/024.png'},
    {id: 7, title: 'Item 7', imageSource: 'http://i1.kym-cdn.com/photos/images/original/000/663/060/024.png'},
    {id: 8, title: 'Item 8', imageSource: 'http://i1.kym-cdn.com/photos/images/original/000/663/060/024.png'},
    {id: 9, title: 'Item 9', imageSource: 'http://i1.kym-cdn.com/photos/images/original/000/663/060/024.png'},
    {id: 10, title: 'Item 10', imageSource: 'http://i1.kym-cdn.com/photos/images/original/000/663/060/024.png'},
    {id: 11, title: 'Item 11', imageSource: 'http://i1.kym-cdn.com/photos/images/original/000/663/060/024.png'},
    {id: 12, title: 'Item 12', imageSource: 'http://i1.kym-cdn.com/photos/images/original/000/663/060/024.png'},
    {id: 13, title: 'Item 13', imageSource: 'http://i1.kym-cdn.com/photos/images/original/000/663/060/024.png'},
]

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

class ClubListPage extends Component {
    render() {
        return (
            <View style={ClubListPageStyle.container}>
                <GridView itemDimension={120}
                    items={ExampleData}
                    renderItem={item => <GridViewItemWithImage imageSource={item.imageSource} title={item.title}/>}/>
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