import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './Header.styles';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Cryptocurrency</Text>
    </View>
  );
};

export default Header;
