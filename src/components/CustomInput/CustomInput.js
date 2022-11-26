import React from 'react';
import {TextInput} from 'react-native';

const CustomInput = ({text, setText, placeholder}) => {
  return (
    <TextInput
      value={text}
      onChangeText={text => setText(text)}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
