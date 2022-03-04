import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useMemo} from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import {getCategoryTotal} from './utils';

const Home = () => {
  const expenses = useSelector(state => state?.expense, shallowEqual);
  const categoryExpenses = useMemo(
    () => getCategoryTotal(expenses),
    [expenses],
  );
  return (
    <View style={style.container}>
      <View>
        <FlatList
          horizontal
          data={categoryExpenses}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{width: 10}} />}
          renderItem={({item}) => (
            <>
              <View style={style.totalCard}>
                <Text style={style.bigText}>{item?.amount}</Text>
                <Text>{item?.category?.label}</Text>
              </View>
            </>
          )}
        />
      </View>

      <FlatList
        data={expenses}
        keyExtractor={(item, index) => item?.name}
        renderItem={({item, index}) => (
          <>
            <View style={style.itemWrapper}>
              <Text>{`${index + 1}. ${item?.name}`}</Text>
              <View style={style.row}>
                <Text style={style.col}>{item?.category?.label}</Text>
                <Text style={style.col}>{item?.date}</Text>
                <Text style={style.col}>{item?.amount}</Text>
              </View>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F7F7F7',
  },
  totalCard: {
    paddingVertical: 25,
    width: 150,
    backgroundColor: 'white',
    marginTop: 15,
    marginBottom: 25,
    alignItems: 'center',
    borderRadius: 10,
  },
  color: '#cc0a5b',
  bigText: {fontSize: 20, marginBottom: 3, color: '#cc0a5b'},
  itemWrapper: {
    backgroundColor: '#EEEEEE',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  row: {flexDirection: 'row'},
  col: {
    width: '33.33%',
    textAlign: 'center',
    color: '#cc0a5b',
  },
});
