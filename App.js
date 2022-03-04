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
import LocalStorageProvider from './LocalStorageProvider';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#cc0a5b" />
      <Provider store={store}>
        <LocalStorageProvider>
          <DrawerNavigation />
        </LocalStorageProvider>
      </Provider>
      <Toast position="bottom" />
    </>
  );
};
export default App;
