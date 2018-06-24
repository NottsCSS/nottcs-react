import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import ChangeCase from 'change-case';

const ExampleData = {
    name: 'Eagle',
    email: 'kecy6cyt@nottingham.edu.my',
    student_id: '18818818',
    library_no: '2001434888',
    major: 'Electrical and Electronics Engineering',
    year: 2,
}

const ProfileCard = ({imageSource, title}) => {
    return (
        <View style={ProfileCardStyle.container}>
            <Card image={{uri: imageSource}}
                imageStyle={ProfileCardStyle.image}
                containerStyle={ProfileCardStyle.card}>
                <View>
                    <Text style={ProfileCardStyle.title}>{title}</Text>
                </View>
            </Card>  
        </View>

    )
}

const ProfileCardStyle = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: 150,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        height: 150,
        width: 150
    }
})


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
    )
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

class ProfilePage extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <ProfileCard title={ExampleData.name} imageSource={'http://i1.kym-cdn.com/photos/images/original/000/663/060/024.png'}/>
                <DetailList details={ExampleData}/>
            </View>
        );
    }
}

export default ProfilePage;