import { createAppContainer, createStackNavigator } from 'react-navigation';

import * as ROUTES from '../../constants/routes';

import Main from '../main';

const AppNavigator = createStackNavigator({
  [ROUTES.MAIN]: Main
});
const App = createAppContainer(AppNavigator);

export default App;
