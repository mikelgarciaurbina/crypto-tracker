import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={headerContainer}>
      <Text style={header}>Cryptocurrency App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerContainer: {
    alignItems: 'center',
    display: 'flex',
    marginTop: 55,
  },
});

const { header, headerContainer } = styles;

export default Header;
