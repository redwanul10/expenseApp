import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Spinner, Button} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import {btnBgPrimary} from '../theme/color';

function CustomButton({btnTxt, onPress, labelStyle}) {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          onPress && onPress();
        }}>
        <Text style={[style.btnText, labelStyle || {}]}>{btnTxt}</Text>
      </TouchableOpacity>
    </>
  );
}

export default CustomButton;

const style = StyleSheet.create({
  btnText: {
    backgroundColor: '#D70F64',
    paddingVertical: 5,
    textAlign: 'center',
    color: 'white',
    borderRadius: 5,
    fontWeight: 'bold',
  },
});
