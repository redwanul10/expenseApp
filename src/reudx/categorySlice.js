import {createSlice} from '@reduxjs/toolkit';
import * as localStorage from '../global/utills/localStorage';

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
        alert('already exist');
        return;
      }
      const updatedCategory = [...state, action.payload];
      localStorage.storeData('@category', updatedCategory);

      return updatedCategory;
    },
    setInitialCategory: (state, action) => {
      return action.payload || state;
    },
  },
});

export const {createCategory, setInitialCategory} = categorySlice.actions;

export default categorySlice;
