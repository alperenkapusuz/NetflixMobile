import React from 'react';
import useMovie from '../../hooks/useMovie';
import CustomListScreen from '../../components/CustomListScreen';
/* Kendi oluşturduğum useMovie hook'undan list datasını çektim CustomListScreen Componentine gönderdim*/
const MoviesScreen = () => {
  const [list] = useMovie();

  return <CustomListScreen list={list} />;
};

export default MoviesScreen;
