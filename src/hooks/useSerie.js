import {useState} from 'react';
import data from '../data/data.json';

export default () => {
  const [serie, setSerie] = useState([]);
  /* Program tipi movie olan dataları filtrele ve map ile yeni bir data oluş */
  const filterData = () => {
    const list = data
      .filter(item => item.programType === 'series')
      .map(({title, description, images, releaseYear}) => ({
        title,
        description,
        images,
        releaseYear,
      }));
    setSerie(list);
  };

  useState(() => {
    filterData();
  });

  return [serie];
};
