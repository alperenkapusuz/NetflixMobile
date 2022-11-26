import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './CustomInput.style';

const CustomInput = ({text, setText, placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={text => setText(text)}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
};

export default CustomInput;
