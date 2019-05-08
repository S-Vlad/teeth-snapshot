import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';

import * as COLORS from '../constants/colors';
import * as ROUTES from '../constants/routes';

export default class TabIcon extends PureComponent {
  static propTypes = {
    focused: PropTypes.bool.isRequired,
    routeName: PropTypes.string.isRequired
  };

  //TODO: remove unused icons

  render() {
    const { focused, routeName } = this.props;
    let iconName;
    let size = 30;

    switch (routeName) {
      case ROUTES.MAIN:
        iconName = 'stream';
        break;

      //TODO: change route and icon
      case 'some':
        iconName = 'steam';
        break;
    }

    return (
      <Icon
        name={iconName}
        size={size}
        style={[focused ? styles.activeIcon : styles.icon]}
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    color: COLORS.REGULAR_GRAY
  },
  activeIcon: {
    color: COLORS.TURQUOISE
  }
});
