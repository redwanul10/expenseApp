import {createSlice} from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'category',
  initialState: [],
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
