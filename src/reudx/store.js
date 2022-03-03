import {configureStore} from '@reduxjs/toolkit';
import categorySlice from './categorySlice';
import expenseSlice from './expenseSlice';

export default configureStore({
  reducer: {
    category: categorySlice.reducer,
    expense: expenseSlice.reducer,
  },
});
