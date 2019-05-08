import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from '../../components';

import * as COLORS from '../../constants/colors';

export default class Main extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>Some</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GRAYISH_NAVY_DARKEST
  }
});
