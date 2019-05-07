import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import { default as PureNavigator } from './navigator';

let AppNavigator;

export default class App extends PureComponent {
  static propTypes = {};

  constructor(props) {
    super(props);

    AppNavigator = PureNavigator;
  }

  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
