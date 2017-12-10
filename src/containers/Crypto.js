import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { FetchCoinData } from '../actions';
import { CoinCard } from '../components';
import styles from './Crypto.styles';

const { contentContainer, spinner } = styles;

class Crypto extends Component {
  componentWillMount() {
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const { crypto: { data = [] } } = this.props;

    return data.map(({
      id,
      name,
      percent_change_24h: percentChange24h,
      percent_change_7d: percentChange7d,
      price_usd: priceUsd,
      symbol,
    }) => (
      <CoinCard
        key={id}
        coinName={name}
        symbol={symbol}
        priceUsd={priceUsd}
        percentChange24h={percentChange24h}
        percentChange7d={percentChange7d}
      />
    ));
  }

  render() {
    const { crypto: { isFetching = true } } = this.props;

    if (isFetching) {
      return (
        <View>
          <Spinner
            visible={isFetching}
            textContent="Loading..."
            textStyle={spinner}
            animation="fade"
          />
        </View>
      );
    }

    return (
      <ScrollView contentContainerStyle={contentContainer}>
        {this.renderCoinCards()}
      </ScrollView>
    );
  }
}
Crypto.propTypes = {
  FetchCoinData: PropTypes.func,
  crypto: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
    isFetching: PropTypes.bool,
  }),
};
Crypto.defaultProps = {
  FetchCoinData() {},
  crypto: {
    data: [],
    isFetching: true,
  },
};

const mapStateToProps = ({ crypto }) => ({
  crypto,
});

export default connect(mapStateToProps, { FetchCoinData })(Crypto);
