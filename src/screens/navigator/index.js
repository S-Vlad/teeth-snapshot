import { createAppContainer, createStackNavigator } from 'react-navigation';

import * as ROUTES from '../../constants/routes';

import { DashboardNavigator } from '../navigator/dashboard-navigator';

const AppNavigator = createStackNavigator({
  [ROUTES.DASHBOARD]: {
    screen: DashboardNavigator,
    navigationOptions: {
      header: null
    }
  }
});
const App = createAppContainer(AppNavigator);

export default App;
