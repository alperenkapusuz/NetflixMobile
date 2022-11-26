import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  Nav: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 18,
    backgroundColor: '#E50914',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'red',
  },
  movieImg: {
    width: Dimensions.get('window').width / 1.44,
    height: Dimensions.get('window').height / 3.2,
    resizeMode: 'stretch',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  serieImg: {
    width: Dimensions.get('window').width / 1.44,
    height: Dimensions.get('window').height / 3.2,
    resizeMode: 'stretch',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 5,
    margin: 10,
    color: 'white',
  },
});
