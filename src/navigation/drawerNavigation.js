import * as React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import CustomDrawer from '../global/components/CustomDrawer';
import Home from '../screens/Home';
import AddCategory from '../screens/AddCategory';
import AddExpense from '../screens/AddExpense';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Add Expense" component={AddExpense} />
        <Drawer.Screen name="Add Category" component={AddCategory} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
