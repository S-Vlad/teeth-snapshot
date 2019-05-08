import AppNavigator from '../../screens/navigator';

import * as ROUTES from '../../constants/routes';

const { router } = AppNavigator;
const initiaState = router.getStateForAction(
  //TODO: change to ROUTES.LOADING
  router.getActionForPathAndParams(ROUTES.DASHBOARD)
);

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }

  const route = navigationState.routes[navigationState.index];

  if (route.routes) {
    return getActiveRouteName(route);
  }

  return route.routeName;
}

export default function(state = initiaState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state); /* || state */

  return nextState
    ? {
        ...nextState,
        activeRouteName: getActiveRouteName(nextState)
      }
    : state;
}
