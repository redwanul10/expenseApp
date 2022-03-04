import React, {useEffect} from 'react';
import * as localStorage from './src/global/utills/localStorage';
import {useDispatch} from 'react-redux';
import {setInitialCategory} from './src/reudx/categorySlice';
import {setInitialExpense} from './src/reudx/expenseSlice';

const LocalStorageProvider = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    setInitialValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setInitialValues = async () => {
    const category = await localStorage.getData('@category');
    const expense = await localStorage.getData('@expense');

    dispatch(setInitialCategory(category));
    dispatch(setInitialExpense(expense));
  };
  return <>{props.children}</>;
};

export default LocalStorageProvider;
