import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import navigation from './navigation';

export default function configureStore() {
  const navigationMiddleware = createReactNavigationReduxMiddleware(
    state => state.navigation
  );

  const persistConfigs = {};

  const rootReducer = combineReducers({
    navigation
  });

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(navigationMiddleware, thunk))
  );

  return store;
}
