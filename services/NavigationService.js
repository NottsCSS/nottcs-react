// NavigationService.js

import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

function getParams() {
  //return null;
  return Object.assign({}, {}, _navigator.state.nav.routes[_navigator.state.nav.index].params);
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  getParams
};