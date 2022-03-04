import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {createCategory} from '../../../reudx/categorySlice';
import FormInput from '../../../global/components/TextInput';
import CustomButton from '../../../global/components/CustomButton';
import * as Yup from 'yup';
import {useIsFocused} from '@react-navigation/core';

const schemaValidation = Yup.object({
  name: Yup.string().required('Route Name is required'),
});

const CreateForm = () => {
  const dispatch = useDispatch();

  // Formiks Setup
  const formikprops = useFormik({
    enableReinitialize: true,
    initialValues: {name: ''},
    validationSchema: schemaValidation,
    onSubmit: (values, {resetForm}) => {
      dispatch(createCategory({...values, id: new Date().getTime()}));
      resetForm();
    },
  });

  const isFocused = useIsFocused();
  useEffect(() => {
    if (!isFocused) formikprops?.resetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  return (
    <View>
      <FormInput
        name="name"
        label="Category Name"
        placeholder="Enter Category Name"
        formikProps={formikprops}
      />
      <CustomButton onPress={formikprops.handleSubmit} btnTxt="Create" />
    </View>
  );
};

export default CreateForm;

const style = StyleSheet.create({});
