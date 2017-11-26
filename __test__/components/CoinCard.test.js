import React from 'react';
import renderer from 'react-test-renderer';

import CoinCard from '../../src/components/CoinCard';

test('renders correctly', () => {
  const tree = renderer.create(<CoinCard />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly with positive values', () => {
  const tree = renderer.create(<CoinCard symbol="BTC" coinName="Bitcoin" priceUsd="8000" percentChange24h="5" percentChange7d="15" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly with negative values', () => {
  const tree = renderer.create(<CoinCard symbol="BTC" coinName="Bitcoin" priceUsd="8000" percentChange24h="-5" percentChange7d="-15" />).toJSON();
  expect(tree).toMatchSnapshot();
});
