import React, { Component } from "react";
import { View, Text } from "react-native";
import ProfileCard from "../components/ProfileCard";
import DetailList from "../components/DetailList";
import { connect } from "react-redux";
import LoadingPage from "./LoadingPage";
import { APP_STORE } from "../services/redux/reducers";
import { requestData } from "../services/redux/actions/request";
import { USER } from "../assets/AppConstants";
import ErrorPage from "./ErrorPage";
const ExampleData = {
    name: "Eagle",
    email: "kecy6cyt@nottingham.edu.my",
    student_id: "18818818",
    library_no: "2001434888",
    major: "Electrical and Electronics Engineering",
    year: 2
};

class ProfilePage extends Component {
    componentDidMount() {
        this.props.dispatch(requestData(USER, null, USER));
    }

    componentDidUpdate() {
        console.log("this.props :", this.props);
    }

    render() {
        return this.props.request.data[USER] &&
            this.props.request.data[USER]._loaded ? (
            this.props.request.data[USER]._error ? (
                <ErrorPage
                    errorMessage={this.props.request.data[USER]._errorMessage}
                />
            ) : (
                <View style={{ flex: 1 }}>
                    <ProfileCard
                        title={this.props.request.data[USER].result.name}
                        imageSource={
                            "http://i1.kym-cdn.com/photos/images/original/000/663/060/024.png"
                        }
                    />
                    <DetailList
                        details={this.props.request.data[USER].result}
                    />
                </View>
            )
        ) : (
            <LoadingPage />
        );
    }
}

export default connect(APP_STORE => APP_STORE)(ProfilePage);
