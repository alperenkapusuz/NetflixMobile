import React from 'react';
import {View, Image, Text, Dimensions} from 'react-native';
import styles from './CustomRenderItem.style';

const CustomRenderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <Image
          style={styles.image}
          source={{
            uri: item.images['Poster Art'].url,
          }}
        />
      </View>
      <View style={styles.titleView}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.yearView}>
        <Text style={styles.year}>{item.releaseYear}</Text>
      </View>
    </View>
  );
};

export default CustomRenderItem;
