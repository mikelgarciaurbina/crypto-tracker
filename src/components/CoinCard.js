import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { images } from '../Utils/CoinIcons';

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
  },
  image: {
    height: 40,
    width: 40,
  },
});

const { container, image, bold } = styles;

const CoinCard = ({ coin_name, percent_change_24h, percent_change_7d, price_usd, symbol }) => {
  return (
    <View style={container}>
      <Image
        style={image}
        source={{ uri: images[symbol] }}
      />
      <Text>{symbol}</Text>
      <Text>{coin_name}</Text>
      <Text>{price_usd} <Text style={bold}>$</Text></Text>
      <Text>Change past 24 hours: {percent_change_24h}</Text>
      <Text>Change past 7 days: {percent_change_7d}</Text>
    </View>
  );
};

export default CoinCard;
