import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

const App = require('./src').default;

AppRegistry.registerComponent(appName, () => App);
