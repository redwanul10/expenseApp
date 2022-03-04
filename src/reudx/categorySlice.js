import {createSlice} from '@reduxjs/toolkit';
import * as localStorage from '../global/utills/localStorage';
import Toast from 'react-native-toast-message';

export const categorySlice = createSlice({
  name: 'category',
  initialState: [
    {name: 'House Rent', id: 34234},
    {name: 'Food Expense', id: 323234},
  ],
  reducers: {
    createCategory: (state, action) => {
      const isExist = state.find(item => item?.name === action?.payload?.name);
      if (isExist) {
        Toast.show({
          type: 'error',
          text1: 'Warning',
          text2: 'This Category Already Exist',
        });
        return;
      }
      const updatedCategory = [...state, action.payload];
      localStorage.storeData('@category', updatedCategory);

      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Category Added successfully',
      });

      return updatedCategory;
    },
    setInitialCategory: (state, action) => {
      return action.payload || state;
    },
  },
});

export const {createCategory, setInitialCategory} = categorySlice.actions;

export default categorySlice;
