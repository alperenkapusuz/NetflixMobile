import {useState} from 'react';
import data from '../data/data.json';

export default () => {
  const [movie, setMovie] = useState([]);

  const filterData = () => {
    const list = data
      .filter(item => item.programType === 'movie')
      .map(({title, description, images, releaseYear}) => ({
        title,
        description,
        images,
        releaseYear,
      }));
    setMovie(list);
  };

  useState(() => {
    filterData();
  });

  return [movie];
};
