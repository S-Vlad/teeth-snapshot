import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text as RNText, Platform, StyleSheet } from 'react-native';

export default class Text extends PureComponent {
  static propTypes = {
    color: PropTypes.oneOf(['black', 'white', 'gray']),
    font: PropTypes.oneOf(['openSans']),
    fontWeight: PropTypes.oneOf(['regular', 'bold']),
    style: RNText.propTypes.style
  };

  static defaultProps = {
    color: 'white',
    font: 'openSans',
    fontWeight: 'regular'
  };

  static getFontOptions(fontWeight) {
    const isAndroid = Platform.OS === 'android';
    const fontOptions = {};

    switch (fontWeight) {
      case 'bold':
        fontOptions.fontWeight = !isAndroid ? '700' : null;
        fontOptions.fontFamily = isAndroid ? 'OpenSans-Bold' : 'Open Sans';
        break;

      case 'regular':
      default:
        fontOptions.fontWeight = !isAndroid ? '400' : null;
        fontOptions.fontFamily = isAndroid ? 'OpenSans-Regular' : 'Open Sans';
        break;
    }

    return fontOptions;
  }

  render() {
    const { style, color, /*font,*/ fontWeight, ...others } = this.props;

    const s = StyleSheet.flatten([
      {
        backgroundColor: 'transparent',
        color
      },
      Text.getFontOptions(fontWeight),
      style
    ]);

    return <RNText style={s} {...others} />;
  }
}
