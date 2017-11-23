import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import { C } from '../../constants';
import styles from './CoinCard.styles';

const { images } = C;
const {
  container,
  image,
  moneySymbol,
  upperRow,
  coinSymbol,
  coinNameText,
  coinPrice,
  statisticsContainer,
  seperator,
  percentChangePlus,
  percentChangeMinus,
} = styles;

const CoinCard = ({
  symbol,
  coinName,
  priceUsd,
  percentChange24h,
  percentChange7d,
}) => (
  <View style={container}>
    <View style={upperRow}>
      <Image style={image} source={images[symbol]} />
      <Text style={coinSymbol}>{symbol}</Text>
      <Text style={seperator}>|</Text>
      <Text style={coinNameText}>{coinName}</Text>
      <Text style={coinPrice}>
        {priceUsd}
        <Text style={moneySymbol}> $ </Text>
      </Text>
    </View>
    <View style={statisticsContainer}>
      <Text>
        {'24h: '}
        <Text
          style={percentChange24h < 0 ? percentChangeMinus : percentChangePlus}
        >
          {percentChange24h} %
        </Text>
      </Text>
      <Text>
        {'7d: '}
        <Text
          style={percentChange7d < 0 ? percentChangeMinus : percentChangePlus}
        >
          {percentChange7d} %
        </Text>
      </Text>
    </View>
  </View>
);
CoinCard.propTypes = {
  symbol: PropTypes.string,
  coinName: PropTypes.string,
  priceUsd: PropTypes.string,
  percentChange24h: PropTypes.string,
  percentChange7d: PropTypes.string,
};
CoinCard.defaultProps = {
  symbol: 'BTC',
  coinName: 'Bitcoin',
  priceUsd: '8000',
  percentChange24h: '5',
  percentChange7d: '1',
};

export default CoinCard;
