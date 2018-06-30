import React, {Component} from 'react';
import { View, StyleSheet, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { FontAwesome } from 'react-native-vector-icons';
import { createStackNavigator } from 'react-navigation';
import NavigationService from '../services/NavigationService'

class Page extends Component {

    static defaultProps = {
        showActionButton: false,
    }

    render() {

        const {pageName, accentColor, children, navigation, showActionButtons} = this.props;

        let Children = () => children;
        const HomeButton = () => {
            return (
                <TouchableOpacity onPress={() => navigation.navigate('eventFeed')}>
                    <View>
                        <FontAwesome name="home" color="white" size={20}/>
                    </View>
                </TouchableOpacity>
            );
        }

        const SettingsButton = () => {
            return (
                <TouchableOpacity onPress={() => NavigationService.navigate('settings')}>
                    <View>
                        <FontAwesome name="gear" color="white" size={20}/>
                    </View>
                </TouchableOpacity>
            );
        }

        return (
            <View style={PageStyle.container}>
                <Header centerComponent={{text: pageName, style: {color: 'white'}}}
                    rightComponent={showActionButtons && <SettingsButton/>}
                    leftComponent={showActionButtons && <HomeButton/>}
                    backgroundColor={accentColor}/>
                <Children/>
            </View>
        )
    }
}

const PageStyle = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Page;