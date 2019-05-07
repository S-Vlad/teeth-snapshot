import AppNavigator from '../../screens/navigator';

import * as ROUTES from '../../constants/routes';

const { router } = AppNavigator;
const initiaState = router.getStateForAction(
  //TODO: change to ROUTES.LOADING
  router.getActionForPathAndParams(ROUTES.MAIN)
);

// function getActiveRouteName(navigationState) {
//   if (!navigationState) {
//     return null;
//   }
// }

export default function(state = initiaState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state); /* || state */

  return nextState
    ? {
        ...nextState
        // activeRouteName: getActiveRouteName(nextState)
      }
    : state;
}
