import React from 'react';
import { Text, View } from 'react-native';

import styles from './Header.styles';

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.header}>Cryptocurrency</Text>
  </View>
);

export default Header;
