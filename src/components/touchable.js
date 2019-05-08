import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ViewPropTypes,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform
} from 'react-native';

import * as COLORS from './../constants/colors';

class Touchable extends PureComponent {
  static propTypes = {
    style: ViewPropTypes.style,
    rippleColor: PropTypes.string,
    children: PropTypes.node,
    onPress: PropTypes.func,
    activeOpacity: PropTypes.number
  };

  static defaultProps = {
    activeOpacity: 0.7
  };

  render() {
    const { style, rippleColor, children, activeOpacity } = this.props;

    return isCompatible('TouchableNativeFeedback') ? (
      <TouchableNativeFeedback
        {...this.props}
        background={
          rippleColor
            ? TouchableNativeFeedback.Ripple(rippleColor)
            : TouchableNativeFeedback.Ripple(COLORS.TRANSPARENT)
        }
        onPress={this.handlePress}
      >
        <View style={style}>{children}</View>
      </TouchableNativeFeedback>
    ) : (
      <TouchableOpacity
        {...this.props}
        activeOpacity={activeOpacity}
        style={style}
        onPress={this.handlePress}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

export default Touchable;

function isCompatible() {
  return Platform.Version >= 21;
}
