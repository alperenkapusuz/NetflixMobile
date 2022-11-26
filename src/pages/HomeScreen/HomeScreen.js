import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import styles from './HomeScreen.style';

const HomeScreen = ({navigation}) => {
  const handleNavigateMovie = () => {
    navigation.navigate('MoviesScreen');
  };

  const handleNavigateSeries = () => {
    navigation.navigate('SeriesScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Nav} onPress={handleNavigateMovie}>
        <Image
          style={styles.movieImg}
          source={require('../../../assets/images/netflixMovies.jpg')}
        />
        <Text style={styles.title}>Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Nav} onPress={handleNavigateSeries}>
        <Image
          style={styles.serieImg}
          source={require('../../../assets/images/netflixSeries.jpg')}
        />
        <Text style={styles.title}>Series</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
