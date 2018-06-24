import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';


const Page = ({pageName, _accentColor, children}) => {

    let Children = () => children;

    return (
        <View style={PageStyle.container}>
            <Header centerComponent={{text: pageName, style: {color: 'white'}}}
                backgroundColor={_accentColor}/>
            <Children/>
        </View>
    )
}

const PageStyle = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Page;