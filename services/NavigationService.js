import { NavigationActions, StackActions } from "react-navigation";

let _navigator;

/**
 * Sets the Navigation stack as the top level navigator
 * Use this with the ref props:
 * ref={navigationRef => {NavigationService.setTopLevelNavigator(navigationRef)}}
 * @param {object} navigatorRef Reference of JSX object for top level navigator
 */
function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

/**
 * Navigates to a page of the root stack
 * @param {string} routeName Name of the target navigating route
 * @param {object} params Additional params to be passed to the page
 */
function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
}

/**
 * Navigates back to the previous page
 */
function goBack() {
    _navigator.dispatch(NavigationActions.back());
}

function navigateWithinStack() {
    //TODO: Write a navigation that replaces the content of stack directly
}

/**
 * Navigates to a page and clears all previous stack records
 */
function navigateAndClearStack(routeName, params) {
    _navigator.dispatch(
        StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName, params })]
        })
    );
}

/**
 * Gets params that were passed to the page
 */
function getParams() {
    try {
        return Object.assign(
            {},
            {},
            _navigator.state.nav.routes[_navigator.state.nav.index].params
        );
    } catch (err) {
        console.log("err :", err);
        return null;
    }
}

export default {
    navigate,
    setTopLevelNavigator,
    getParams,
    goBack,
    navigateAndClearStack
};
