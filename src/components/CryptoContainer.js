import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

class CryptoContainer extends Component {
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

export default connect(mapStateToProps)(CryptoContainer);
