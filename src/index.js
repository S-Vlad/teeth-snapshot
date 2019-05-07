import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import App from './screens';

import configureStore from './store';

const store = configureStore();
const persistor = persistStore(store);

export default class Root extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}
