import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import PropTypes from "prop-types";
import QRCode from "react-native-qrcode-svg";
import QRStringGenerator from "../components/scripts/QRStringGenerator";
import { connect } from "react-redux";
import { APP_STORE } from "../services/redux/reducers";
import { USER, EVENT_FEED_SECONDARY_ACCENT } from "../assets/AppConstants";
import { saveQrCode } from "../services/redux/actions/qrCode";

class EventSignUpConfirmationPage extends React.Component {

    state = {
        qrCode: "Sample Text"
    }

    componentDidMount() {
        console.log("Ping");
        const { event } = this.props;
        const user = this.props.request.data[USER].result;
        this.setState({qrCode: QRStringGenerator("event", event.title, user.id)});
    }

    render() {
        const { onClose, event } = this.props;
        return (
            <View style={EventSignUpConfirmationPageStyle.container}>
                <Text style={EventSignUpConfirmationPageStyle.text}>
                    Get your QR Code scanned by the club admin to confirm the
                    sign up!
                </Text>
                <View style={EventSignUpConfirmationPageStyle.qrCode}>
                    <QRCode value={this.state.qrCode} size={200} />
                </View>
                <View style={EventSignUpConfirmationPageStyle.button}>
                    <Button
                        title="Save QR Code"
                        onPress={() => {
                            this.props.dispatch(
                                saveQrCode(event.title, Date.now(), this.state.qrCode)
                            );
                            alert("QR Code saved!");
                        }}
                        color={EVENT_FEED_SECONDARY_ACCENT}
                    />
                </View>
                <View style={EventSignUpConfirmationPageStyle.button}>
                    <Button
                        title="Close"
                        onPress={onClose}
                        color={EVENT_FEED_SECONDARY_ACCENT}
                    />
                </View>
            </View>
        );
    }
}

EventSignUpConfirmationPage.propTypes = {
    onClose: PropTypes.func.isRequired
};

const EventSignUpConfirmationPageStyle = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 20
    },
    qrCode: {
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    button: {
        margin: 5
    },
    text: {
        fontSize: 16
    }
});

export default connect(APP_STORE => APP_STORE)(EventSignUpConfirmationPage);
