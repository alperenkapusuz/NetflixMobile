import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import CustomRenderItem from '../CustomRenderItem/CustomRenderItem';
import CustomInput from '../CustomInput/CustomInput';
import styles from './CustomListScreen.style';

const CustomListScreen = ({list}) => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(list);
  const [filteredDataSource, setFilteredDataSource] = useState(list);
  const [selected, setSelected] = useState('');

  const dropdownData = [
    {key: '1', value: 'Yeniye Göre Sırala'},
    {key: '2', value: 'Eskiye Göre Sırala'},
    {key: '3', value: 'Random Sırala'},
  ];

  useEffect(() => {
    const searchFilterFunction = text => {
      if (text === '' || text.length < 3) {
        setFilteredDataSource(data);
        return;
      }
      setFilteredDataSource(
        data.filter(x => x.title.toLowerCase().includes(text.toLowerCase())),
      );
    };
    searchFilterFunction(search);
  }, [data, search]);

  const handleSort = () => {
    if (selected === 'Yeniye Göre Sırala') {
      setFilteredDataSource(
        [...filteredDataSource].sort((a, b) => b.releaseYear - a.releaseYear),
      );
    } else if (selected === 'Eskiye Göre Sırala') {
      setFilteredDataSource(
        [...filteredDataSource].sort((a, b) => a.releaseYear - b.releaseYear),
      );
    } else if (selected === 'Random Sırala') {
      setFilteredDataSource(
        [...filteredDataSource].sort(() => {
          return 0.5 - Math.random();
        }),
      );
    } else {
      setFilteredDataSource(data);
    }
  };

  const renderItem = ({item}) => {
    return <CustomRenderItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input}>
        <CustomInput text={search} setText={setSearch} placeholder="Ara" />
        <SelectList
          setSelected={val => setSelected(val)}
          data={dropdownData}
          save="value"
          onSelect={handleSort}
          dropdownStyles={{backgroundColor: '#B9B9B9'}}
          boxStyles={{backgroundColor: '#B9B9B9'}}
          search={false}
        />
      </View>
      <FlatList
        data={filteredDataSource.slice(0, 18)}
        renderItem={renderItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default CustomListScreen;
