import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import FetchCoinData from '../Actions/FetchCoinData';

class CryptoContainer extends Component {
  componentDidMount() {
    this.props.FetchCoinData();
  }

  render() {
    return (
      <View>
        <Text>Container</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto,
  };
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);
