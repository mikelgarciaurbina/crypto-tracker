import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/Store';
import { Crypto } from './src/containers';
import { Header } from './src/components';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header />
          <Crypto />
        </View>
      </Provider>
    );
  }
}
