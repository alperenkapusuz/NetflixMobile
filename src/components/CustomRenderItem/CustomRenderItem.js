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

      <Text>{item.title}</Text>
      <Text>{item.releaseYear}</Text>
    </View>
  );
};

export default CustomRenderItem;
