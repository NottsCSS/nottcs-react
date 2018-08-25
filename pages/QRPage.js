import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { APP_STORE } from "../services/redux/reducers";
import QRCode from "react-native-qrcode-svg";

class QRPage extends Component {
    render() {
        return (
            <View>
                {this.props.qrCode.savedQrCode.map(qrCode => {
                    return (
                        <View key={qrCode.createdTime} style={QRPageStyle.container}>
                            <View>
                                <QRCode value={qrCode.data} size={100}/>
                            </View>
                            <View>
                                <Text>{qrCode.data}</Text>
                                <Text>{qrCode.name}</Text>
                                <Text>{new Date(qrCode.createdTime).toString()}</Text>
                                <Text>
                                    {qrCode.verified ? "Verified" : "Not Verified"}
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        );
    }
}

const QRPageStyle = StyleSheet.create({
    container: {
        flexDirection: "column"
    }
})

export default connect(APP_STORE => APP_STORE)(QRPage);
