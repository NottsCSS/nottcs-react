import React, { Component } from "react";
import {
    View,
    StyleSheet,
    TouchableNativeFeedback,
    TouchableOpacity,
    Text
} from "react-native";
import GridView from "react-native-super-grid";

import GridViewItemWithImage from "../components/GridViewItemWithImage";
import NavigationService from "../services/NavigationService";
import LoadingPage from "./LoadingPage";
import { connect } from "react-redux";
import { CLUBS } from "../assets/AppConstants";
import { requestData } from "../services/redux/actions/request";
import { APP_STORE } from "../services/redux/reducers";

class ClubListPage extends Component {
    componentDidMount() {
        this.props.dispatch(requestData(CLUBS, null, CLUBS));
    }

    render() {
        return this.props.request.data[CLUBS] &&
            this.props.request.data[CLUBS]._loaded ? (
            this.props.request.data[CLUBS]._error ? (
                <Text>{this.props.request.data[CLUBS]._errorMessage}</Text>
            ) : (
                <View style={ClubListPageStyle.container}>
                    <GridView
                        itemDimension={120}
                        items={this.props.request.data[CLUBS].result}
                        renderItem={item => (
                            <TouchableOpacity
                                onPress={() =>
                                    NavigationService.navigate("club", {
                                        club: item
                                    })
                                }
                            >
                                <View style={ClubListPageStyle.container}>
                                    <GridViewItemWithImage
                                        imageSource={item.icon}
                                        title={item.name}
                                    />
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )
        ) : (
            <LoadingPage />
        );
    }
}

const ClubListPageStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 30,
        fontWeight: "bold"
    }
});

export default connect(APP_STORE => APP_STORE)(ClubListPage);
