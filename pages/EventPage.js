import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import PropTypes from "prop-types";
import NavigationService from "../services/NavigationService";
import { Tile } from "react-native-elements";
import Modal from "react-native-modal";
import EventSignUpConfirmationPage from "./EventSignUpConfirmationPage";
import EventSignUpPage from "./EventSignUpPage";
import LoadingPage from "./LoadingPage";
import { EVENT_FEED_SECONDARY_ACCENT } from "../assets/AppConstants";

class EventPage extends React.Component {
    state = {
        params: null,
        posterModalVisible: false,
        signUpModalVisible: false,
        formSubmitted: false
    };

    submitForm = () => {
        this.setState({ formSubmitted: true });
    };

    closeSignUpModal = () => {
        this.setState({ signUpModalVisible: false, formSubmitted: false });
    };

    componentDidMount() {
        let params = NavigationService.getParams();
        this.setState(Object.assign({}, this.state, { params: params }));
    }

    render() {
        return this.state.params ? (
            <View style={EventPageStyle.container}>
                <Tile
                    imageSrc={{ uri: this.state.params.event.image }}
                    title={this.state.params.event.title}
                    activeOpacity={1}
                    onPress={() => this.setState({ posterModalVisible: true })}
                />
                <View style={EventPageStyle.textView}>
                    <Text>{this.state.params.event.description}</Text>
                </View>
                <Button
                    title="Sign Up!"
                    onPress={() => this.setState({ signUpModalVisible: true })}
                    color={EVENT_FEED_SECONDARY_ACCENT}
                />

                {/* Poster Modal*/}
                <Modal
                    isVisible={this.state.posterModalVisible}
                    onBackButtonPress={() =>
                        this.setState({ posterModalVisible: false })
                    }
                    onBackdropPress={() =>
                        this.setState({ posterModalVisible: false })
                    }
                    onSwipe={() => this.setState({ posterModalVisible: false })}
                    swipeDirection="down"
                >
                    <Image
                        source={{ uri: this.state.params.event.image }}
                        style={EventPageStyle.image}
                    />
                </Modal>

                {/* Sign up Modal*/}
                <Modal isVisible={this.state.signUpModalVisible}>
                    {this.state.formSubmitted ? (
                        <EventSignUpConfirmationPage
                            onClose={this.closeSignUpModal}
                            event={this.state.params.event}
                        />
                    ) : (
                        <EventSignUpPage
                            onCancel={this.closeSignUpModal}
                            onSubmit={this.submitForm}
                            event={this.state.params.event}
                        />
                    )}
                </Modal>
            </View>
        ) : (
            <LoadingPage />
        );
    }
}

const EventPageStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: 300,
        resizeMode: "contain"
    },
    textView: {
        flex: 1,
        padding: 15
    }
});

export default EventPage;
