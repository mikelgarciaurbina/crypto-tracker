import { StyleSheet } from 'react-native';

import { THEME } from '../../constants';

export default StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerContainer: {
    alignItems: 'center',
    display: 'flex',
    paddingBottom: 10,
    paddingTop: 55,
    shadowColor: THEME.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    zIndex: 10,
  },
});
