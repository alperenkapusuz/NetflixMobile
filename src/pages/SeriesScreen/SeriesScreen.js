import React from 'react';
import useSerie from '../../hooks/useSerie';
import CustomListScreen from '../../components/CustomListScreen';
import styles from './SeriesScreen.style';

const SeriesScreen = () => {
  const [list] = useSerie();

  return <CustomListScreen list={list} style={styles.container} />;
};

export default SeriesScreen;
