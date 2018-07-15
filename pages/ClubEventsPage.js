import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import EventList from "../components/EventList";
import { connect } from "react-redux";
import LoadingPage from "./LoadingPage";
import { APP_STORE } from "../services/redux/reducers/index";
import { requestData } from "../services/redux/actions/request";
import { EVENTS } from "../assets/AppConstants";

class ClubEventsPage extends React.Component {
    state = {
        eventList: null,
        _loaded: false
    };

    componentDidMount() {
        this.props.dispatch(requestData(EVENTS, null, "clubEvents"));
    }

    render() {
        return this.props.request.data["clubEvents"] &&
            this.props.request.data["clubEvents"]._loaded ? (
            this.props.request.data["clubEvents"]._error ? (
                <Text>
                    {this.props.request.data["clubEvents"]._errorMessage}
                </Text>
            ) : (
                <View style={{ flex: 1 }}>
                    <EventList
                        eventList={
                            this.props.request.data["clubEvents"].result.results
                        }
                    />
                </View>
            )
        ) : (
            <LoadingPage />
        );
    }
}

export default connect(APP_STORE => APP_STORE)(ClubEventsPage);
