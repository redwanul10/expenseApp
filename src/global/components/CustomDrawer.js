import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = props => {
  console.log(JSON.stringify(props, null, 2));
  return (
    <DrawerContentScrollView {...props}>
      <View style={style.header}>
        <View style={style.headerWrapper}>
          <View style={style.headerContent}>
            <View style={style.userInfoWrapper}>
              <Image
                style={style.userPhoto}
                source={require('../../assets/user.jpeg')}
              />

              <Text style={style.headerText}>Jhone Doe</Text>
              <Text style={style.subHeader}>JhoneDoe@example.com</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={style.headerWrapper}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Home');
          }}
          style={style.row}>
          <MaterialCommunityIcons
            name="file-multiple-outline"
            style={style.drawerIcon}
          />
          <Text style={style.drawerItem}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Add Expense');
          }}
          style={style.row}>
          <Ionicons name="add-circle" style={style.drawerIcon} />
          <Text style={style.drawerItem}>Add Expense</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Add Category');
          }}
          style={style.row}>
          <AntDesign name="addfile" style={style.drawerIcon} />
          <Text style={style.drawerItem}>Add Category</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity>
          <Text style={style.drawerItem}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={e => props.navigation.navigate('TermsAndCondition')}>
          <Text style={style.drawerItem}>Terms & Conditions / Privacy</Text>
        </TouchableOpacity> */}
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const style = StyleSheet.create({
  header: {
    backgroundColor: '#D70F64',
    marginTop: -5,
  },
  headerContent: {
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subHeader: {
    color: 'white',
    fontSize: 14,
  },
  headerWrapper: {
    padding: 15,
  },
  drawerItem: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  drawerIcon: {
    fontSize: 18,
    marginRight: 20,
    color: '#D70F64',
  },
  userPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userInfoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
