import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import { default as PureNavigator } from './navigator';

let AppNavigator;

class App extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    AppNavigator = PureNavigator;
  }

  render() {
    const { dispatch, navigation } = this.props;

    return (
      <View style={styles.container}>
        <AppNavigator state={navigation} dispatch={dispatch} />
      </View>
    );
  }
}

export default connect(
  state => ({
    navigation: state.navigation
  }),
  dispatch => ({
    dispatch
  })
)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
