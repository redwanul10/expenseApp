import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const CategoryList = () => {
  const data = useSelector(state => state?.category);
  console.log(data);
  return (
    <View style={{marginTop: 20}}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item?.name}
        renderItem={({item, index}) => (
          <>
            <View style={style.itemWrapper}>
              <Text>{`${index + 1}. ${item?.name}`}</Text>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default CategoryList;

const style = StyleSheet.create({
  itemWrapper: {
    backgroundColor: '#EEEEEE',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
