import React from 'react';
import useSerie from '../../hooks/useSerie';
import CustomListScreen from '../../components/CustomListScreen';
/* Kendi oluşturduğum useSerie hook'undan list datasını çektim CustomListScreen Componentine gönderdim */
const SeriesScreen = () => {
  const [list] = useSerie();

  return <CustomListScreen list={list} />;
};

export default SeriesScreen;
