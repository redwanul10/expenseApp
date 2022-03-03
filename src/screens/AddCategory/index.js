import {View, StyleSheet} from 'react-native';
import React from 'react';
import CreateForm from './components/CreateForm';
import CategoryList from './components/CategoryList';

const AddCategory = () => {
  return (
    <View style={style.container}>
      <CreateForm />
      <CategoryList />
    </View>
  );
};

export default AddCategory;

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
});
