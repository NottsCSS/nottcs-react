import React, {Component} from 'react';
import { View } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import DetailList from '../components/DetailList';
import {getAndSaveUserData} from '../redux/actions/user';
import {connect} from 'react-redux';
import AppStore from '../redux/reducers'

const ExampleData = {
    name: 'Eagle',
    email: 'kecy6cyt@nottingham.edu.my',
    student_id: '18818818',
    library_no: '2001434888',
    major: 'Electrical and Electronics Engineering',
    year: 2,
}

class ProfilePage extends Component {

    componentDidMount() {
        this.props.dispatch(getAndSaveUserData());
    }

    componentDidUpdate() {
        console.log('this.props :', this.props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ProfileCard title={this.props.user.name} imageSource={'http://i1.kym-cdn.com/photos/images/original/000/663/060/024.png'}/>
                <DetailList details={this.props.user}/>
            </View>
        );
    }
}

export default connect(AppStore => AppStore.user)(ProfilePage);