import React from 'react';
import {TextInput} from 'react-native';

const CustomInput = ({onSearch}) => {
  return <TextInput onChangeText={onSearch} />;
};

export default CustomInput;
