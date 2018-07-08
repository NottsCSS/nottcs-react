import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import NavigationService from '../services/NavigationService';
import ClubSignUpConfirmationPage from './ClubSignUpConfirmationPage'
import ClubSignUpPage from './ClubSignUpPage';
import Modal from 'react-native-modal';
import LoadingPage from './LoadingPage';

class ClubDescriptionPage extends React.Component {

	state = {
        club: null,
        signUpModalVisible: false,
        formSubmitted: false,
    }

    submitForm = () => {
		this.setState({formSubmitted: true});
	}
    
    closeSignUpModal = () => {
		this.setState({signUpModalVisible: false, formSubmitted: false});
	}

	componentDidMount() {
		let club = NavigationService.getParams().club;

		let newState = Object.assign({}, this.state, {club});

		this.setState(newState);
	}

	render() {
		return (
            <View style={ClubDescriptionPageStyle.container}>
                {
                    this.state.club
                    ?
                        <View style={ClubDescriptionPageStyle.container}>
                            <Image source={{uri: this.state.club.icon}}
                                style={ClubDescriptionPageStyle.image}/>
                            <ScrollView style={ClubDescriptionPageStyle.container} 
                                contentContainerStyle={ClubDescriptionPageStyle.textView}>
                                <Text style={ClubDescriptionPageStyle.title}>{this.state.club.name}</Text>
                                <Text style={ClubDescriptionPageStyle.description}>{this.state.club.description}</Text>
                            </ScrollView>
                            <Button title="Register" onPress={() => this.setState({signUpModalVisible: true})}/>
                        </View>
					:
						<LoadingPage/>
                }
                {/* Sign up Modal*/}
					<Modal isVisible={this.state.signUpModalVisible}>
						{
							this.state.formSubmitted
							?
								<ClubSignUpConfirmationPage onClose={this.closeSignUpModal}/>
							:
								<ClubSignUpPage onCancel={this.closeSignUpModal}
									onSubmit={this.submitForm}/>
						}
					</Modal>
            </View>
			
		)
	}
}

const ClubDescriptionPageStyle = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		height: 200,
		width: Dimensions.get('window').width,
		resizeMode: 'contain',
		backgroundColor: 'white',
		padding: 10
	},
	textView: {
		padding: 10,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	description: {
		textAlign: 'justify',
	}
});

export default ClubDescriptionPage;