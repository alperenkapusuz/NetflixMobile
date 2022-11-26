import React from 'react';
import useMovie from '../../hooks/useMovie';
import CustomListScreen from '../../components/CustomListScreen';

const MoviesScreen = () => {
  const [list] = useMovie();

  return <CustomListScreen list={list} />;
};

export default MoviesScreen;
