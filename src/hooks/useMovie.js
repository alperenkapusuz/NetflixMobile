import {useState} from 'react';
import data from '../data/data.json';

export default () => {
  const [movie, setMovie] = useState([]);
  /* Program tipi movie olan dataları filtrele ve map ile yeni bir data oluş */
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
