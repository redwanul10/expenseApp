/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import DrawerNavigation from './src/navigation/drawerNavigation';
import {Provider} from 'react-redux';
import store from './src/reudx/store';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#cc0a5b" />
      <Provider store={store}>
        <DrawerNavigation />
      </Provider>
    </>
  );
};
export default App;
