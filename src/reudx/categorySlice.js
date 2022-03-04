import {createSlice} from '@reduxjs/toolkit';

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
      return [...state, action.payload];
    },
    deleteCategory: (state, action) => {
      return state.filter(item => item.name !== action.payload.name);
    },
  },
});

export const {createCategory, deleteCategory} = categorySlice.actions;

export default categorySlice;
