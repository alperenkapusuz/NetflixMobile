import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 2.1,
    height: Dimensions.get('window').height / 3.1,
    backgroundColor: '#E50914',
    margin: 5,
    borderWidth: 2,
    borderColor: '#E50914',
    borderRadius: 10,
  },
  cover: {
    resizeMode: 'stretch',
    width: Dimensions.get('window').width / 2.14,
    height: Dimensions.get('window').height / 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'black',
  },
  title: {
    height: 50,
    fontSize: 15,
  },
  content: {
    height: 40,
  },
  year: {
    color: '#D1D1D1',
    fontSize: 13,
  },
  image: {
    width: Dimensions.get('window').width / 2.15,
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
