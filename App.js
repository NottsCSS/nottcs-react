import React from "react";
import { StyleSheet, View, AsyncStorage } from "react-native";
import { createStackNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { FontAwesome } from "react-native-vector-icons";

import EventFeedPage from "./pages/EventFeedPage";
import ClubListPage from "./pages/ClubListPage";
import ProfilePage from "./pages/ProfilePage";

import { createStore, compose, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";

import Page from "./components/Page";
import SettingsPage from "./pages/SettingsPage";
import NavigationService from "./services/NavigationService";
import EventPage from "./pages/EventPage";
import {
    EVENT_FEED,
    EVENT_FEED_ICON,
    CLUB_LIST_ICON,
    CLUB_LIST,
    PROFILE,
    PROFILE_ICON,
    EVENT_FEED_TITLE,
    EVENT_FEED_ACCENT,
    CLUB_LIST_TITLE,
    CLUB_LIST_ACCENT,
    PROFILE_TITLE,
    PROFILE_ACCENT,
    DEFAULT_ACCENT,
    LOGIN_TITLE,
    SETTINGS_TITLE,
    SETTINGS_ACCENT
} from "./assets/AppConstants";
import ClubPage from "./pages/ClubPage";
import LoginPage from "./pages/LoginPage";
import { PersistGate } from "redux-persist/integration/react";
import { Text } from "react-native-elements";
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1";
import thunk from "redux-thunk";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import LoadingPage from "./pages/LoadingPage";
import { APP_STORE } from "./services/redux/reducers";
import QRPage from "./pages/QRPage";

const TabBarIcon = type => {
    let iconName;

    switch (type) {
        case EVENT_FEED:
            iconName = EVENT_FEED_ICON;
            break;
        case CLUB_LIST:
            iconName = CLUB_LIST_ICON;
            break;
        case PROFILE:
            iconName = PROFILE_ICON;
            break;
        case "qrcode":
            iconName = "qrcode";
            break;
    }

    return <FontAwesome name={iconName} color="white" size={20} />;
};

const HomeStack = createMaterialBottomTabNavigator(
    {
        eventFeed: {
            screen: ({ navigation }) => (
                <Page
                    showActionButtons
                    accentColor={EVENT_FEED_ACCENT}
                    pageName={EVENT_FEED_TITLE}
                    navigation={navigation}
                >
                    <EventFeedPage />
                </Page>
            ),
            navigationOptions: {
                title: EVENT_FEED_TITLE,
                tabBarIcon: TabBarIcon(EVENT_FEED),
                tabBarColor: EVENT_FEED_ACCENT
            }
        },
        clubList: {
            screen: ({ navigation }) => (
                <Page
                    showActionButtons
                    accentColor={CLUB_LIST_ACCENT}
                    pageName={CLUB_LIST_TITLE}
                    navigation={navigation}
                >
                    <ClubListPage />
                </Page>
            ),
            navigationOptions: {
                title: CLUB_LIST_TITLE,
                tabBarIcon: TabBarIcon(CLUB_LIST),
                tabBarColor: CLUB_LIST_ACCENT
            }
        },
        qr: {
            screen: ({ navigation }) => (
                <Page
                    showActionButtons
                    accentColor={DEFAULT_ACCENT}
                    pageName="QR Page"
                    navigation={navigation}
                >
                    <QRPage />
                </Page>
            ),
            navigationOptions: {
                title: "QR Code",
                tabBarIcon: TabBarIcon("qrcode"),
                tabBarColor: DEFAULT_ACCENT
            }
        },
        profile: {
            screen: ({ navigation }) => (
                <Page
                    showActionButtons
                    accentColor={PROFILE_ACCENT}
                    pageName={PROFILE_TITLE}
                    navigation={navigation}
                >
                    <ProfilePage />
                </Page>
            ),
            navigationOptions: {
                title: PROFILE_TITLE,
                tabBarIcon: () => TabBarIcon(PROFILE),
                tabBarColor: PROFILE_ACCENT
            }
        }
    },
    {
        initialRouteName: "eventFeed",
        shifting: true,
        backBehavior: "none"
    }
);

const RootStack = createStackNavigator(
    {
        login: {
            screen: ({ navigation }) => (
                <Page accentColor={DEFAULT_ACCENT} pageName={LOGIN_TITLE}>
                    <LoginPage navigation={navigation} />
                </Page>
            )
        },
        home: {
            screen: ({ navigation }) => <HomeStack />
        },
        settings: {
            screen: ({ navigation }) => (
                <Page accentColor={SETTINGS_ACCENT} pageName={SETTINGS_TITLE}>
                    <SettingsPage navigation={navigation} />
                </Page>
            )
        },
        event: {
            screen: ({ navigation }) => (
                <Page
                    accentColor={EVENT_FEED_ACCENT}
                    pageName={NavigationService.getParams().event.title}
                >
                    <EventPage />
                </Page>
            )
        },
        club: {
            screen: ({ navigation }) => (
                <ClubPage accentColor={CLUB_LIST_ACCENT} />
            )
        }
    },
    {
        initialRouteName: "login",
        headerMode: "none"
    }
);

class AppFrame extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <RootStack
                    ref={navigationRef => {
                        NavigationService.setTopLevelNavigator(navigationRef);
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    pageTitle: {
        color: "white",
        fontSize: 20
    }
});

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel1,
    whitelist: []
};

export const persistedStore = persistReducer(persistConfig, APP_STORE);
export let store = createStore(persistedStore, applyMiddleware(thunk));
let persistor = persistStore(store);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<LoadingPage />} persistor={persistor}>
                    <AppFrame />
                </PersistGate>
            </Provider>
        );
    }
}
