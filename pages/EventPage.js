import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import PropTypes from 'prop-types';
import NavigationService from '../services/NavigationService'
import { Tile } from 'react-native-elements';
import Modal from 'react-native-modal';
import EventSignUpConfirmationPage from './EventSignUpConfirmationPage'
import EventSignUpPage from './EventSignUpPage'

class EventPage extends React.Component {

	state={
		params: null,
		posterModalVisible: false,
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
		let params = NavigationService.getParams();
		this.setState(Object.assign({}, this.state, {params: params}));
	}

	render() {
		return (
			this.state.params
			?
				<View style={EventPageStyle.container}>
					<Tile imageSrc={{uri: this.state.params.event.imageSource}}
						title={this.state.params.event.title}
						activeOpacity={1}
						onPress={() => this.setState({posterModalVisible: true})}/>
					<View style={EventPageStyle.textView}>
						<Text>{this.state.params.event.description}</Text>
					</View>
					<Button title="Sign Up!" onPress={() => this.setState({signUpModalVisible: true})}/>
					
					{/* Poster Modal*/}
					<Modal isVisible={this.state.posterModalVisible}
						onBackButtonPress={() => this.setState({posterModalVisible: false})}
						onBackdropPress={() => this.setState({posterModalVisible: false})}
						onSwipe={() => this.setState({posterModalVisible: false})}
						swipeDirection="down">
						<Image source={{uri: this.state.params.event.imageSource}}
							style={EventPageStyle.image}/>
					</Modal>

					{/* Sign up Modal*/}
					<Modal isVisible={this.state.signUpModalVisible}>
						{
							this.state.formSubmitted
							?
								<EventSignUpConfirmationPage onClose={this.closeSignUpModal}/>
							:
								<EventSignUpPage onCancel={this.closeSignUpModal}
									onSubmit={this.submitForm}/>
						}
					</Modal>
				</View>
			:
				<View style={EventPageStyle.textView}>
					<Text>Please wait while we pull some data...</Text>
				</View>
		);
	}
}

const EventPageStyle = StyleSheet.create({
	container: {
		flex: 1
	},
	image: {

		height: 300,
		resizeMode: 'contain',
	},
	textView: {
		flex: 1,
		padding: 15,
	}
})

export default EventPage;