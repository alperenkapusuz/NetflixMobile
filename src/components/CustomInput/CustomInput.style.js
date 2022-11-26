import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    height: 45,
    margin: 2,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    placeholderTextColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 1,
    color: 'black',
  },
});
