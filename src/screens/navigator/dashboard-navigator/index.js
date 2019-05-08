import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import { MainStack } from './main-stack';

import { TabIcon } from '../../../reusable';

import * as ROUTES from '../../../constants/routes';

const routes = {
  [ROUTES.MAIN]: MainStack,
  some: MainStack
};

export const DashboardNavigator = createBottomTabNavigator(routes, {
  initialRouteName: ROUTES.MAIN,
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused }) => {
      const { routeName } = navigation.state;

      return <TabIcon focused={focused} routeName={routeName} />;
    }
  }),
  tabBarOptions: {
    showLabel: false
  }
});
