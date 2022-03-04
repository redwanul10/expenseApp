import {View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useFormik} from 'formik';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import FormInput from '../../../global/components/TextInput';
import CustomButton from '../../../global/components/CustomButton';
import * as Yup from 'yup';
import ICustomPicker from '../../../global/components/ICustomPicker';
import IDatePicker from '../../../global/components/IDatePicker';
import {_todayDate} from '../../../global/utills/_todayDate';
import {createExpense} from '../../../reudx/expenseSlice';
import {useIsFocused} from '@react-navigation/core';

const schemaValidation = Yup.object({
  name: Yup.string().required('Route Name is required'),
  amount: Yup.string().required('Route amount is required'),
  category: Yup.object({
    value: Yup.string().required('Category is required'),
    label: Yup.string().required('Category is required'),
  }),
});

const CreateForm = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const catagories = useSelector(
    state =>
      state?.category?.map(item => ({value: item?.id, label: item?.name})),
    shallowEqual,
  );

  // Formiks Setup
  const formikprops = useFormik({
    enableReinitialize: true,
    initialValues: {name: '', amount: '', category: '', date: _todayDate()},
    validationSchema: schemaValidation,
    onSubmit: (values, {resetForm}) => {
      dispatch(createExpense(values));
      resetForm();
    },
  });

  useEffect(() => {
    if (!isFocused) formikprops?.resetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  return (
    <View>
      <FormInput
        name="name"
        label="Expense Name"
        placeholder="Enter Expense Name"
        formikProps={formikprops}
      />

      <FormInput
        name="amount"
        label="Amount"
        placeholder="Enter Amount"
        keyboardType="numeric"
        formikProps={formikprops}
      />

      <ICustomPicker
        label="Category Name"
        name="category"
        options={catagories}
        formikProps={formikprops}
      />

      <IDatePicker label="Date" name="date" formikProps={formikprops} />

      <CustomButton onPress={formikprops.handleSubmit} btnTxt="Create" />
    </View>
  );
};

export default CreateForm;

const style = StyleSheet.create({});
