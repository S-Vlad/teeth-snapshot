import { createStackNavigator } from 'react-navigation';

import Main from '../../main';

import * as ROUTES from '../../../constants/routes';

export const MainStack = createStackNavigator(
  {
    [ROUTES.MAIN]: Main
  },
  {
    navigationOptions: {
      header: null
    }
  }
);
