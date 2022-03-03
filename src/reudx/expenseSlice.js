import {createSlice} from '@reduxjs/toolkit';

export const expenseSlice = createSlice({
  name: 'expense',
  initialState: [],
  reducers: {
    createExpense: (state, action) => {
      console.log(action);
      const isExist = state.find(item => item?.name === action?.payload?.name);
      if (isExist) {
        alert('already exist');
        return;
      }
      return [...state, action.payload];
    },
    deleteExpense: (state, action) => {
      return state.filter(item => item.name !== action.payload.name);
    },
  },
});

export const {createExpense, deleteExpense} = expenseSlice.actions;

export default expenseSlice;
