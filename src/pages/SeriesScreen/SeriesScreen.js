import React from 'react';
import useSerie from '../../hooks/useSerie';
import CustomListScreen from '../../components/CustomListScreen';

const SeriesScreen = () => {
  const [list] = useSerie();

  return <CustomListScreen list={list} />;
};

export default SeriesScreen;
