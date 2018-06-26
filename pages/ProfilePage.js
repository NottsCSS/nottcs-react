import React, {Component} from 'react';
import { View } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import DetailList from '../components/DetailList';

const ExampleData = {
    name: 'Eagle',
    email: 'kecy6cyt@nottingham.edu.my',
    student_id: '18818818',
    library_no: '2001434888',
    major: 'Electrical and Electronics Engineering',
    year: 2,
}

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