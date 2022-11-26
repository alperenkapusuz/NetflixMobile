import React from 'react';
import useMovie from '../../hooks/useMovie';
import CustomListScreen from '../../components/CustomListScreen';
import styles from './MoviesScreen.style';

const MoviesScreen = () => {
  const [list] = useMovie();

  return <CustomListScreen list={list} style={styles.container} />;
};

export default MoviesScreen;
