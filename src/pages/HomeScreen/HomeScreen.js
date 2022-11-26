import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './HomeScreen.style';
import data from '../../data/data.json';

const HomeScreen = ({navigation}) => {
  const [list, setList] = useState(data);

  const handleNavigateMovie = () => {
    navigation.navigate('MoviesScreen');
  };

  const handleNavigateSeries = () => {
    navigation.navigate('MoviesScreen');
  };

  return (
    <View>
      <TouchableOpacity onPress={handleNavigateMovie}>
        <Image source={require('../../../assets/images/netflixMovies.jpg')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNavigateSeries}>
        <Image source={require('../../../assets/images/netflixSeries.jpg')} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
