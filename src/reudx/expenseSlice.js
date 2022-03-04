import {createSlice} from '@reduxjs/toolkit';
import * as localStorage from '../global/utills/localStorage';
import Toast from 'react-native-toast-message';

export const expenseSlice = createSlice({
  name: 'expense',
  initialState: [
    {
      name: 'Cheese Burger',
      amount: '280',
      category: {
        value: 323234,
        label: 'Food Expense',
      },
      date: '2022-03-04',
    },
    {
      name: 'Milk Shake',
      amount: '130',
      category: {
        value: 323234,
        label: 'Food Expense',
      },
    },
  ],
  reducers: {
    createExpense: (state, action) => {
      console.log(action);
      const isExist = state.find(item => item?.name === action?.payload?.name);
      if (isExist) {
        Toast.show({
          type: 'error',
          text1: 'Warning',
          text2: 'This Expense Already Exist',
        });
        return;
      }

      const updatedExpense = [...state, action.payload];
      localStorage.storeData('@expense', updatedExpense);

      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Expense Added successfully',
      });

      return updatedExpense;
    },
    setInitialExpense: (state, action) => {
      return action.payload || state;
    },
  },
});

export const {createExpense, setInitialExpense} = expenseSlice.actions;

export default expenseSlice;
