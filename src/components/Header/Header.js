import React from 'react';
import { Text, View } from 'react-native';

import styles from './Header.styles';

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Cryptocurrency</Text>
  </View>
);

export default Header;
