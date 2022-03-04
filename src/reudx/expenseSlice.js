import {createSlice} from '@reduxjs/toolkit';
import * as localStorage from '../global/utills/localStorage';

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
        alert('already exist');
        return;
      }

      const updatedExpense = [...state, action.payload];
      localStorage.storeData('@expense', updatedExpense);

      return updatedExpense;
    },
    setInitialExpense: (state, action) => {
      return action.payload || state;
    },
  },
});

export const {createExpense, setInitialExpense} = expenseSlice.actions;

export default expenseSlice;
