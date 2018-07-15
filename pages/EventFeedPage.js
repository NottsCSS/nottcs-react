import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import EventList from "../components/EventList";
import { connect } from "react-redux";
import LoadingPage from "./LoadingPage";
import { APP_STORE } from "../services/redux/reducers";
import { requestData } from "../services/redux/actions/request";
import { EVENTS } from "../assets/AppConstants";
import ErrorPage from "./ErrorPage";

class EventFeedPage extends Component {
    componentDidMount() {
        this.props.dispatch(requestData(EVENTS, null, EVENTS));
        console.log("this.props :", this.props);
    }

    componentDidUpdate() {
        //console.log('this.props :', this.props);
    }

    render() {
        console.log("this.props :", this.props);
        return this.props.request.data[EVENTS] &&
            this.props.request.data[EVENTS]._loaded ? (
            this.props.request.data[EVENTS]._error ? (
                <ErrorPage
                    errorMessage={this.props.request.data[EVENTS]._errorMessage}
                />
            ) : (
                <View style={EventFeedPageStyle.container}>
                    <EventList
                        eventList={
                            this.props.request.data[EVENTS].result.results
                        }
                    />
                </View>
            )
        ) : (
            <LoadingPage />
        );
    }
}

const EventFeedPageStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 30,
        fontWeight: "bold"
    }
});

export default connect(APP_STORE => APP_STORE)(EventFeedPage);
